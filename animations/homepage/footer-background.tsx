import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FooterBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let points: FooterPoint[] = [];
    let connections: Connection[] = [];
    let animationFrameId: number;

    class FooterPoint {
      mesh: THREE.Mesh;
      time: number;
      speed: number;
      initialY: number;
      
      constructor(x: number, y: number) {
        // Create glowing point
        const geometry = new THREE.CircleGeometry(0.08, 32);
        const material = new THREE.ShaderMaterial({
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
              float alpha = smoothstep(0.5, 0.0, dist);
              float pulse = sin(time * 2.0) * 0.5 + 0.5;
              alpha *= 0.3 + pulse * 0.2;
              vec3 finalColor = mix(color, vec3(1.0), pulse * 0.3);
              gl_FragColor = vec4(finalColor, alpha);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(x, y, 0);
        
        // Animation properties
        this.time = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.5;
        this.initialY = y;
      }

    update(time: number): void {
      // Gentle floating motion
      this.mesh.position.y = this.initialY + Math.sin(time * this.speed + this.time) * 0.1;
      (this.mesh.material as THREE.ShaderMaterial).uniforms.time.value = time;
    }
    }

    class Connection {
      line: THREE.Line;
      pointA: FooterPoint;
      pointB: FooterPoint;
      
      constructor(pointA: FooterPoint, pointB: FooterPoint) {
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color('#ff9500') },
            pointA: { value: new THREE.Vector3() },
            pointB: { value: new THREE.Vector3() }
          },
          vertexShader: `
            uniform vec3 pointA;
            uniform vec3 pointB;
            
            varying float vProgress;
            void main() {
              vProgress = position.x;
              vec3 pos = mix(pointA, pointB, position.x);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            uniform vec3 color;
            varying float vProgress;
            
            void main() {
              float flow = fract(vProgress - time * 0.2);
              flow = smoothstep(0.0, 0.1, flow) * smoothstep(1.0, 0.9, flow);
              float alpha = flow * 0.15;
              gl_FragColor = vec4(color, alpha);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending
        });

        const resolution = 20;
        const points = new Float32Array(resolution * 3);
        for (let i = 0; i < resolution; i++) {
          points[i * 3] = i / (resolution - 1);
          points[i * 3 + 1] = 0;
          points[i * 3 + 2] = 0;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));

        this.line = new THREE.Line(geometry, material);
        this.pointA = pointA;
        this.pointB = pointB;
      }

      update(time: number) {
        (this.line.material as THREE.ShaderMaterial).uniforms.time.value = time;
        (this.line.material as THREE.ShaderMaterial).uniforms.pointA.value.copy(this.pointA.mesh.position);
        (this.line.material as THREE.ShaderMaterial).uniforms.pointB.value.copy(this.pointB.mesh.position);
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

      // Create grid of points
      const cols = 8;
      const rows = 3;
      const spacing = 3;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = (i - cols/2) * spacing;
          const y = (j - rows/2) * spacing;
          const point = new FooterPoint(x, y);
          points.push(point);
          scene.add(point.mesh);
        }
      }

      // Create connections
      points.forEach((point, i) => {
        points.slice(i + 1).forEach(otherPoint => {
          const distance = point.mesh.position.distanceTo(otherPoint.mesh.position);
          if (distance < spacing * 1.5) {
            const connection = new Connection(point, otherPoint);
            connections.push(connection);
            scene.add(connection.line);
          }
        });
      });

      camera.position.z = 15;

      // Mouse interaction
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
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

        // Subtle camera movement
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
        camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
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

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-30" />;
};

export default FooterBackground;