import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ServicesBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let particles = [];
    let animationFrameId;

    class FlowParticle {
      constructor() {
        this.geometry = new THREE.SphereGeometry(0.03, 8, 8);
        this.material = new THREE.MeshBasicMaterial({
          color: new THREE.Color('#ff712a'),
          transparent: true,
          opacity: 0.4
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        
        // Start particles in a circular pattern
        const angle = Math.random() * Math.PI * 2;
        const radius = 5 + Math.random() * 5;
        this.mesh.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 10
        );
        
        // Create circular motion
        this.center = new THREE.Vector3(0, 0, this.mesh.position.z);
        this.angle = angle;
        this.speed = 0.001 + Math.random() * 0.002;
        this.radius = radius;
        this.verticalSpeed = (Math.random() - 0.5) * 0.01;
      }

      update() {
        // Update angle for circular motion
        this.angle += this.speed;
        
        // Update position with circular motion
        this.mesh.position.x = Math.cos(this.angle) * this.radius;
        this.mesh.position.y = Math.sin(this.angle) * this.radius;
        
        // Add vertical movement
        this.mesh.position.z += this.verticalSpeed;
        
        // Reset position if particle goes too far up or down
        if (Math.abs(this.mesh.position.z) > 5) {
          this.verticalSpeed *= -1;
        }
        
        // Pulse the opacity
        this.material.opacity = 0.4 + Math.sin(this.angle * 5) * 0.2;
      }
    }

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Create flow particles
      for (let i = 0; i < 200; i++) {
        const particle = new FlowParticle();
        particles.push(particle);
        scene.add(particle.mesh);
      }

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      camera.position.z = 15;

      // Add mouse interaction
      const handleMouseMove = (event) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        // Subtle camera movement
        camera.position.x += (mouseX - camera.position.x) * 0.03;
        camera.position.y += (mouseY - camera.position.y) * 0.03;
        camera.lookAt(scene.position);
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Update particles
        particles.forEach(particle => particle.update());

        // Slowly rotate entire scene
        scene.rotation.z += 0.0005;

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

export default ServicesBackground;