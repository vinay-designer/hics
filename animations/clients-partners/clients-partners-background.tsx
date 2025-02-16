import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ClientsPartnersBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;
    let connections: THREE.LineSegments;
    let animationFrameId: number;

    const init = () => {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Create particles
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 200;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      // Create network-like particle distribution
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = 20;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);

        // Create gradient colors from orange to white
        const mix = Math.random();
        colors[i3] = 1; // R
        colors[i3 + 1] = 0.44 + mix * 0.56; // G
        colors[i3 + 2] = 0.16 + mix * 0.84; // B
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      particles = new THREE.Points(particleGeometry, particleMaterial);

      // Create connections between particles
      const connections: { indices: number[]; distances: number[] } = createConnections(positions, particleCount);
      const connectionGeometry = new THREE.BufferGeometry();
      const connectionPositions = new Float32Array(connections.indices.length * 3);
      const connectionColors = new Float32Array(connections.indices.length * 3);

      for (let i = 0; i < connections.indices.length; i += 2) {
        const index1 = connections.indices[i] * 3;
        const index2 = connections.indices[i + 1] * 3;

        // Copy positions
        for (let j = 0; j < 3; j++) {
          connectionPositions[i * 3 + j] = positions[index1 + j];
          connectionPositions[(i + 1) * 3 + j] = positions[index2 + j];
        }

        // Create gradient colors
        const alpha = Math.min(1, 5 / connections.distances[i / 2]);
        for (let j = 0; j < 2; j++) {
          connectionColors[(i + j) * 3] = 1; // R
          connectionColors[(i + j) * 3 + 1] = 0.44; // G
          connectionColors[(i + j) * 3 + 2] = 0.16; // B
        }
      }

      connectionGeometry.setAttribute('position', new THREE.BufferAttribute(connectionPositions, 3));
      connectionGeometry.setAttribute('color', new THREE.BufferAttribute(connectionColors, 3));

      const connectionMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending
      });

      const connectionLines = new THREE.LineSegments(connectionGeometry, connectionMaterial);
      scene.add(connectionLines);
      scene.add(particles);

      camera.position.z = 30;
    };

    const createConnections = (positions: Float32Array, particleCount: number) => {
      const indices: number[] = [];
      const distances: number[] = [];
      const maxDistance = 8;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const distance = calculateDistance(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );

          if (distance < maxDistance) {
            indices.push(i, j);
            distances.push(distance);
          }
        }
      }

      return { indices, distances };
    };

    const calculateDistance = (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => {
      return Math.sqrt(
        Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
      );
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (particles) {
        particles.rotation.y += 0.001;
        particles.rotation.x += 0.0005;

        // Add wave motion
        const positions = particles.geometry.attributes.position.array as Float32Array;
        const time = Date.now() * 0.001;

        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const z = positions[i + 2];
          positions[i + 1] += Math.sin(time + (x + z) * 0.1) * 0.002;
        }

        particles.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      if (camera) {
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }
    };

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    init();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ClientsPartnersBackground;