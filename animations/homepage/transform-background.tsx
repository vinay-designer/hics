import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TransformBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let particles = [];
    let animationFrameId: number;

    class Particle {
      geometry: THREE.SphereGeometry;
      material: THREE.MeshBasicMaterial;
      mesh: THREE.Mesh;
      velocity: THREE.Vector3;
      connections: Array<{ line: THREE.Line; target: Particle }>;

      constructor() {
        this.geometry = new THREE.SphereGeometry(0.05, 8, 8);
        this.material = new THREE.MeshBasicMaterial({
          color: new THREE.Color('#ff712a'),
          transparent: true,
          opacity: 0.6
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
        this.velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        );
        this.connections = [];
      }

      update() {
        this.mesh.position.add(this.velocity);

        // Bounce off boundaries
        if (Math.abs(this.mesh.position.x) > 10) this.velocity.x *= -1;
        if (Math.abs(this.mesh.position.y) > 10) this.velocity.y *= -1;
        if (Math.abs(this.mesh.position.z) > 10) this.velocity.z *= -1;
      }
    }

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Create particles
      for (let i = 0; i < 100; i++) {
        const particle = new Particle();
        particles.push(particle);
        scene.add(particle.mesh);
      }

      // Create line material for connections
      const lineMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color('#ff9500'),
        transparent: true,
        opacity: 0.2
      });

      // Create connections between nearby particles
      const lineGeometries = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const lineGeometry = new THREE.BufferGeometry();
          const positions = new Float32Array(6); // Two points, three coordinates each
          lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          const line = new THREE.Line(lineGeometry, lineMaterial);
          particles[i].connections.push({ line, target: particles[j] });
          scene.add(line);
          lineGeometries.push(lineGeometry);
        }
      }

      camera.position.z = 15;

      // Mouse interaction
      const handleMouseMove = (event: MouseEvent) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Update particles
        particles.forEach(particle => particle.update());

        // Update connections
        particles.forEach(particle => {
          particle.connections.forEach(({ line, target }) => {
            const positions = line.geometry.attributes.position.array;
            positions[0] = particle.mesh.position.x;
            positions[1] = particle.mesh.position.y;
            positions[2] = particle.mesh.position.z;
            positions[3] = target.mesh.position.x;
            positions[4] = target.mesh.position.y;
            positions[5] = target.mesh.position.z;

            // Only show connections for particles within a certain distance
            const distance = particle.mesh.position.distanceTo(target.mesh.position);
            if (distance < 5) {
              (line.material as THREE.LineBasicMaterial).opacity = 0.2 * (1 - distance / 5);
            } else {
              (line.material as THREE.LineBasicMaterial).opacity = 0;
            }

            line.geometry.attributes.position.needsUpdate = true;
          });
        });

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        mountRef.current?.removeChild(renderer.domElement);
        cancelAnimationFrame(animationFrameId);
      };
    };

    init();
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default TransformBackground;