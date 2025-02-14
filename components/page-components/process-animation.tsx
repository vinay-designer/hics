import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ProcessBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let hexagons = [];
    let animationFrameId;

    class HexagonCell {
      constructor(x, y, size = 2) {
        // Create hexagon shape
        const shape = new THREE.Shape();
        const vertices = 6;
        
        for (let i = 0; i < vertices; i++) {
          const angle = (i / vertices) * Math.PI * 2;
          const px = Math.cos(angle) * size;
          const py = Math.sin(angle) * size;
          i === 0 ? shape.moveTo(px, py) : shape.lineTo(px, py);
        }

        const geometry = new THREE.ShapeGeometry(shape);
        
        // Custom shader material
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            progress: { value: 0 },
            color1: { value: new THREE.Color('#ff712a') },
            color2: { value: new THREE.Color('#ff9500') }
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            uniform float progress;
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec2 vUv;
            
            void main() {
              float edgeDist = min(vUv.x, min(vUv.y, min(1.0 - vUv.x, 1.0 - vUv.y)));
              float edge = smoothstep(0.0, 0.1, edgeDist);
              
              float wave = sin(time * 2.0 + vUv.x * 10.0 + vUv.y * 10.0) * 0.5 + 0.5;
              vec3 color = mix(color1, color2, wave * progress);
              
              float alpha = edge * (0.1 + progress * 0.4);
              gl_FragColor = vec4(color, alpha);
            }
          `,
          transparent: true,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(x, y, 0);
        
        this.progress = 0;
        this.targetProgress = 0;
        this.activated = false;
        
        // Animation parameters
        this.baseScale = 0.95 + Math.random() * 0.1;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.5 + Math.random() * 0.5;
      }

      update(time, mousePosition) {
        // Distance-based activation
        const dx = this.mesh.position.x - mousePosition.x * 30;
        const dy = this.mesh.position.y - mousePosition.y * 30;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        this.targetProgress = Math.max(0, 1 - distance / 20);
        this.progress += (this.targetProgress - this.progress) * 0.1;
        
        // Update uniforms
        this.mesh.material.uniforms.time.value = time;
        this.mesh.material.uniforms.progress.value = this.progress;
        
        // Scale animation
        const scale = this.baseScale + Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.03;
        this.mesh.scale.set(scale, scale, scale);
      }
    }

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      // Create hexagonal grid
      const gridWidth = 20;
      const gridHeight = 12;
      const size = 2;
      const horizontalSpacing = size * 1.732; // √3
      const verticalSpacing = size * 1.5;
      
      for (let row = -gridHeight; row < gridHeight; row++) {
        const offset = (row % 2) * (horizontalSpacing / 2);
        for (let col = -gridWidth; col < gridWidth; col++) {
          const x = col * horizontalSpacing + offset;
          const y = row * verticalSpacing;
          
          const hexagon = new HexagonCell(x, y, size);
          hexagons.push(hexagon);
          scene.add(hexagon.mesh);
        }
      }

      camera.position.z = 50;

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const time = performance.now() * 0.001;

        // Update hexagons
        hexagons.forEach(hexagon => {
          hexagon.update(time, { x: mouseX, y: mouseY });
        });

        // Gentle camera movement
        camera.position.x = mouseX * 5;
        camera.position.y = mouseY * 5;
        camera.lookAt(scene.position);

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

export default ProcessBackground;