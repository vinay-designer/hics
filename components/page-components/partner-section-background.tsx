import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PartnersBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let nodes = [];
    let connections = [];
    interface NodeMesh extends THREE.Mesh {
      position: THREE.Vector3;
    }

    interface NodeType {
      mesh: NodeMesh;
      velocity: THREE.Vector3;
      update: () => void;
    }

    interface ConnectionType {
      line: THREE.Line;
      node1: NodeType;
      node2: NodeType;
      update: () => void;
    }

    let animationFrameId: number;

    class Node implements NodeType {
      mesh: NodeMesh;
      velocity: THREE.Vector3;
      
      constructor() {
        const geometry = new THREE.SphereGeometry(0.1, 16, 16);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color('#ff712a'),
          transparent: true,
          opacity: 0.6
        });
        this.mesh = new THREE.Mesh(geometry, material);
        
        // Position nodes in a sphere-like distribution
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        const radius = 5 + Math.random() * 3;
        
        this.mesh.position.set(
          radius * Math.sin(theta) * Math.cos(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(theta)
        );
        
        this.velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        );
      }

      update() {
        this.mesh.position.add(this.velocity);
        
        // Keep nodes within bounds
        const maxDistance = 8;
        if (this.mesh.position.length() > maxDistance) {
          this.mesh.position.normalize().multiplyScalar(maxDistance);
          this.velocity.multiplyScalar(-1);
        }
      }
    }

    class Connection implements ConnectionType {
      line: THREE.Line;
      node1: NodeType;
      node2: NodeType;

      constructor(node1: NodeType, node2: NodeType) {
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color('#ff9500'),
          transparent: true,
          opacity: 0.2
        });
        
        const points = [node1.mesh.position, node2.mesh.position];
        geometry.setFromPoints(points);
        
        this.line = new THREE.Line(geometry, material);
        this.node1 = node1;
        this.node2 = node2;
      }

      update() {
        const points = [this.node1.mesh.position, this.node2.mesh.position];
        this.line.geometry.setFromPoints(points);
        
        // Update opacity based on distance
        const distance = this.node1.mesh.position.distanceTo(this.node2.mesh.position);
        (this.line.material as THREE.LineBasicMaterial).opacity = Math.max(0, 0.5 - distance / 15);
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

      // Create nodes
      for (let i = 0; i < 50; i++) {
        const node = new Node();
        nodes.push(node);
        scene.add(node.mesh);
      }

      // Create connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() < 0.1) { // Only connect some nodes
            const connection = new Connection(nodes[i], nodes[j]);
            connections.push(connection);
            scene.add(connection.line);
          }
        }
      }

      camera.position.z = 15;

      // Mouse interaction
      interface MouseMoveEvent {
        clientX: number;
        clientY: number;
      }

      const handleMouseMove = (event: MouseMoveEvent): void => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Update nodes
        nodes.forEach(node => node.update());

        // Update connections
        connections.forEach(connection => connection.update());

        // Rotate entire scene slowly
        scene.rotation.y += 0.001;
        scene.rotation.x += 0.0005;

        renderer.render(scene, camera);
      };

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
      animate();

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

export default PartnersBackground;