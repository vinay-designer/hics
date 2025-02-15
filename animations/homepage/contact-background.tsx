import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ContactBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    interface ThreeJSElements {
      scene: THREE.Scene;
      camera: THREE.PerspectiveCamera;
      renderer: THREE.WebGLRenderer;
    }
    let { scene, camera, renderer } = {} as ThreeJSElements;
    let points: Point[] = [];
    let connections: Connection[] = [];
    let animationFrameId: number | undefined;

    class Point {
      mesh: THREE.Mesh;
      glow: THREE.Mesh;
      basePos: { x: number; y: number };
      time: number;
      speed: number;

      constructor(x: number, y: number) {
        const geometry = new THREE.CircleGeometry(0.15, 32);
        const material: THREE.ShaderMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color('#ff712a') }
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
            uniform vec3 color;
            varying vec2 vUv;
            
            void main() {
              float dist = length(vUv - vec2(0.5));
              float alpha = smoothstep(0.5, 0.2, dist);
              float pulse = sin(time * 2.0) * 0.5 + 0.5;
              alpha *= 0.5 + pulse * 0.5;
              gl_FragColor = vec4(color, alpha);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending
        });

        this.mesh = new THREE.Mesh(geometry, material) as THREE.Mesh<THREE.CircleGeometry, THREE.ShaderMaterial>;
        this.mesh.position.set(x, y, 0);
        
        // Add glow
        const glowGeometry = new THREE.CircleGeometry(0.3, 32);
        const glowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color('#ff9500') }
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
            uniform vec3 color;
            varying vec2 vUv;
            
            void main() {
              float dist = length(vUv - vec2(0.5));
              float alpha = smoothstep(0.5, 0.0, dist) * 0.3;
              float pulse = sin(time * 1.5) * 0.5 + 0.5;
              alpha *= pulse;
              gl_FragColor = vec4(color, alpha);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending
        });

        this.glow = new THREE.Mesh(glowGeometry, glowMaterial);
        this.mesh.add(this.glow);

        // Animation properties
        this.basePos = { x, y };
        this.time = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.5;
      }

      update(time: number) {
        // Gentle floating motion
        const moveX = Math.sin(this.time + time) * 0.3;
        const moveY = Math.cos(this.time * 0.5 + time) * 0.3;
        
        this.mesh.position.x = this.basePos.x + moveX;
        this.mesh.position.y = this.basePos.y + moveY;
        
        // Update shader uniforms
        (this.mesh.material as THREE.ShaderMaterial).uniforms.time.value = time;
        (this.glow.material as THREE.ShaderMaterial).uniforms.time.value = time;
        
        this.time += this.speed * 0.01;
      }
    }

    class Connection {
      public line: THREE.Line<THREE.BufferGeometry, THREE.ShaderMaterial>;
      private startPoint: Point;
      private endPoint: Point;

      constructor(startPoint: Point, endPoint: Point) {
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color('#ff9500') },
            startPos: { value: new THREE.Vector3(startPoint.mesh.position.x, startPoint.mesh.position.y, 0) },
            endPos: { value: new THREE.Vector3(endPoint.mesh.position.x, endPoint.mesh.position.y, 0) }
          },
          vertexShader: `
            uniform float time;
            uniform vec3 startPos;
            uniform vec3 endPos;
            varying float vProgress;
            
            void main() {
              vProgress = position.x;
              vec3 pos = mix(startPos, endPos, position.x);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            uniform vec3 color;
            varying float vProgress;
            
            void main() {
              float flow = fract(vProgress - time * 0.5);
              flow = smoothstep(0.0, 0.1, flow) * smoothstep(1.0, 0.9, flow);
              float alpha = flow * 0.3;
              gl_FragColor = vec4(color, alpha);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending
        });

        const linePoints = [];
        for (let i = 0; i <= 20; i++) {
          linePoints.push(new THREE.Vector3(i / 20, 0, 0));
        }
        geometry.setFromPoints(linePoints);

        this.line = new THREE.Line(geometry, material);
        this.startPoint = startPoint;
        this.endPoint = endPoint;
      }

    update(time: number): void {
      this.line.material.uniforms.time.value = time;
      this.line.material.uniforms.startPos.value.copy(this.startPoint.mesh.position);
      this.line.material.uniforms.endPos.value.copy(this.endPoint.mesh.position);
    }
    }

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Create points in a grid pattern
      const gridSize = 6;
      const spacing = 4;
      
      for (let x = -gridSize; x <= gridSize; x++) {
        for (let y = -gridSize; y <= gridSize; y++) {
          if (Math.random() > 0.5) { // Random distribution
            const point = new Point(x * spacing, y * spacing);
            points.push(point);
            scene.add(point.mesh);
          }
        }
      }

      // Create connections between nearby points
      points.forEach((point, i) => {
        points.slice(i + 1).forEach(otherPoint => {
          const dx = point.mesh.position.x - otherPoint.mesh.position.x;
          const dy = point.mesh.position.y - otherPoint.mesh.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < spacing * 1.5 && Math.random() > 0.5) {
            const connection = new Connection(point, otherPoint);
            connections.push(connection);
            scene.add(connection.line);
          }
        });
      });

      camera.position.z = 30;

      // Mouse interaction
      let mouseX = 0;
      let mouseY = 0;

    interface MouseMoveEvent {
      clientX: number;
      clientY: number;
    }

    const handleMouseMove = (event: MouseMoveEvent): void => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const time = performance.now() * 0.001;

        // Update points and connections
        points.forEach(point => point.update(time));
        connections.forEach(connection => connection.update(time));

        // Smooth camera movement
        camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
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
        if (animationFrameId !== undefined) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    };

    init();
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ContactBackground;