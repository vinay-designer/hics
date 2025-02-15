import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AboutBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;
    let animationFrameId: number;

    const init = () => {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Create particle system
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 2000;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Create a spiral pattern
        const radius = Math.random() * 20;
        const theta = Math.random() * Math.PI * 2;
        const y = (Math.random() - 0.5) * 20;
        
        positions[i3] = radius * Math.cos(theta);
        positions[i3 + 1] = y;
        positions[i3 + 2] = radius * Math.sin(theta);

        // Gradient colors from orange to white
        const colorPos = y / 20 + 0.5; // 0 to 1
        colors[i3] = 1;                // R
        colors[i3 + 1] = 0.44 + colorPos * 0.56; // G
        colors[i3 + 2] = 0.16 + colorPos * 0.84; // B
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      camera.position.z = 15;
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (particles) {
        particles.rotation.y += 0.001;
        
        // Add wave motion
        const positions = particles.geometry.attributes.position.array;
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

      if (particles) {
        particles.rotation.y = mouseX * 0.1;
        particles.rotation.x = mouseY * 0.1;
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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

export default AboutBackground;