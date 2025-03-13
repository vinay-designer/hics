import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ContactBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer;
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

      // Create grid of dots - adjusted for light theme
      const geometry = new THREE.BufferGeometry();
      const count = 50;
      const size = 50;
      const positions = new Float32Array(count * count * 3);
      const colors = new Float32Array(count * count * 3);

      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          const index = (i * count + j) * 3;
          
          // Position in grid
          positions[index] = (j - count / 2) * (size / count);
          positions[index + 1] = 0;
          positions[index + 2] = (i - count / 2) * (size / count);

          // Color gradient from orange to blue for light theme
          // Original orange: RGB(255, 113, 42) -> normalized (1, 0.44, 0.16)
          // Blue accent: RGB(66, 153, 225) -> normalized (0.26, 0.6, 0.88)
          const mixFactor = Math.abs(Math.sin(i / count * Math.PI) * Math.cos(j / count * Math.PI));
          
          // Mix between orange and light blue
          colors[index] = 1 - (mixFactor * 0.74); // R: from 1 to 0.26
          colors[index + 1] = 0.44 + (mixFactor * 0.16); // G: from 0.44 to 0.6
          colors[index + 2] = 0.16 + (mixFactor * 0.72); // B: from 0.16 to 0.88
        }
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 0.5, // Reduced opacity for light theme
        blending: THREE.AdditiveBlending
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // Rotate points to face camera
      points.rotation.x = -Math.PI / 2;

      camera.position.z = 30;
      camera.position.y = 20;
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      // Wave animation parameters
      const waves = [
        { amplitude: 0.5, frequency: 0.5, speed: 0.5, phase: 0 },
        { amplitude: 0.3, frequency: 0.8, speed: 0.7, phase: Math.PI / 4 },
        { amplitude: 0.2, frequency: 1.2, speed: 0.9, phase: Math.PI / 2 }
      ];

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const time = Date.now() * 0.001;
        const positions = points.geometry.attributes.position.array as Float32Array;

        // Apply multiple wave patterns
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            const index = (i * count + j) * 3;
            const x = positions[index];
            const z = positions[index + 2];

            let y = 0;
            // Combine multiple waves
            waves.forEach(wave => {
              const distance = Math.sqrt(x * x + z * z);
              y += wave.amplitude * Math.sin(
                wave.frequency * distance + 
                time * wave.speed + 
                wave.phase
              );
            });

            positions[index + 1] = y;
          }
        }

        points.geometry.attributes.position.needsUpdate = true;

        // Gentle rotation
        points.rotation.z += 0.0005;

        renderer.render(scene, camera);
      };

      const handleMouseMove = (event: MouseEvent) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      };

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('mousemove', handleMouseMove);
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

export default ContactBackground;