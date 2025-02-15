import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PortfolioBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let flowLines = [];
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    class FlowLine {
      mesh: THREE.Mesh;
      speed: number;
      yOffset: number;
      
      constructor(startX: number) {
        const points = [];
        const segments = 200;
        const width = 120; // Increased width
        
        for (let i = 0; i < segments; i++) {
          const x = (i / segments) * width - width/2 + startX;
          const y = 0;
          const z = Math.sin(x * 0.1) * 5;
          points.push(new THREE.Vector3(x, y, z));
        }

        const curve = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(curve, 100, 0.05, 8, false);

        // Custom shader for flowing effect
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            baseColor: { value: new THREE.Color('#ff712a') },
            flowColor: { value: new THREE.Color('#ff9500') },
            mousePosition: { value: new THREE.Vector2(0, 0) }
          },
          vertexShader: `
            varying vec2 vUv;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 flowColor;
            uniform vec2 mousePosition;
            varying vec2 vUv;
            varying vec3 vPosition;
            
            void main() {
              float flow = fract(vUv.x * 3.0 - time * 0.5);
              flow = smoothstep(0.0, 0.1, flow) * smoothstep(1.0, 0.9, flow);
              
              float mouseDistance = length(vec2(vPosition.x, vPosition.z) - mousePosition);
              float mouseInfluence = smoothstep(10.0, 0.0, mouseDistance);
              
              vec3 color = mix(baseColor, flowColor, flow);
              float alpha = 0.3 + flow * 0.3 + mouseInfluence * 0.4;
              
              gl_FragColor = vec4(color, alpha);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.speed = Math.random() * 0.5 + 0.5;
        this.yOffset = Math.random() * Math.PI * 2;
    }

      update(time: number, mousePosition: THREE.Vector2) {
        // Update uniforms
        (this.mesh.material as THREE.ShaderMaterial).uniforms.time.value = time * this.speed;
        (this.mesh.material as THREE.ShaderMaterial).uniforms.mousePosition.value = mousePosition;
        
        // Gentle floating motion
        this.mesh.position.y = Math.sin(time + this.yOffset) * 0.2;
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
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Create flow lines across the width
      const numLines = 20;
      const spacing = 2;
      
      for (let i = 0; i < numLines; i++) {
        const startX = (i - numLines/2) * spacing;
        const line = new FlowLine(startX);
        flowLines.push(line);
        scene.add(line.mesh);
      }

      // Set camera position for wide view
      camera.position.y = 15;
      camera.position.z = 20;
      camera.rotation.x = -Math.PI / 4;

      // Mouse interaction
      interface MouseMoveEvent {
        clientX: number;
        clientY: number;
      }

      const handleMouseMove = (event: MouseMoveEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const time = performance.now() * 0.001;

        // Update flow lines
        const mousePosition = new THREE.Vector2(mouseX * 20, mouseY * 20);
        flowLines.forEach(line => line.update(time, mousePosition));

        // Gentle camera movement
        camera.position.x = mouseX * 5;
        camera.lookAt(new THREE.Vector3(mouseX * 5, 0, 0));

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

export default PortfolioBackground;