import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleSystem {
  geometry: THREE.SphereGeometry;
  material: THREE.MeshBasicMaterial;
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  connections: Array<{
    line: THREE.Line;
    target: ParticleSystem;
    geometry: THREE.BufferGeometry;
    material: THREE.LineBasicMaterial;
  }>;
  update: () => void;
}

const TransformBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: ParticleSystem[];
    animationFrameId?: number;
    dispose: () => void;
  }>();

  useEffect(() => {
    if (!mountRef.current) return;

    let animationFrameId: number;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 15;

    // Initialize sceneRef.current early
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles: [],
      animationFrameId: undefined,
      dispose: () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        // Rest of disposal logic will be set later
      }
    };

    class Particle implements ParticleSystem {
      geometry: THREE.SphereGeometry;
      material: THREE.MeshBasicMaterial;
      mesh: THREE.Mesh;
      velocity: THREE.Vector3;
      connections: Array<{
        line: THREE.Line;
        target: ParticleSystem;
        geometry: THREE.BufferGeometry;
        material: THREE.LineBasicMaterial;
      }>;

      constructor() {
        this.geometry = new THREE.SphereGeometry(0.05, 8, 8);
        this.material = new THREE.MeshBasicMaterial({
          color: new THREE.Color('#ff712a'),
          transparent: true,
          opacity: 0.6,
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

        const bounds = 10;
        if (Math.abs(this.mesh.position.x) > bounds) {
          this.velocity.x *= -1;
          this.mesh.position.x = Math.sign(this.mesh.position.x) * bounds;
        }
        if (Math.abs(this.mesh.position.y) > bounds) {
          this.velocity.y *= -1;
          this.mesh.position.y = Math.sign(this.mesh.position.y) * bounds;
        }
        if (Math.abs(this.mesh.position.z) > bounds) {
          this.velocity.z *= -1;
          this.mesh.position.z = Math.sign(this.mesh.position.z) * bounds;
        }

        this.connections.forEach(({ line, target, geometry }) => {
          const positions = geometry.attributes.position.array as Float32Array;
          
          positions[0] = this.mesh.position.x;
          positions[1] = this.mesh.position.y;
          positions[2] = this.mesh.position.z;
          positions[3] = target.mesh.position.x;
          positions[4] = target.mesh.position.y;
          positions[5] = target.mesh.position.z;

          const distance = this.mesh.position.distanceTo(target.mesh.position);
          const maxDistance = 5;
          const opacity = distance < maxDistance ? 0.2 * (1 - distance / maxDistance) : 0;
          (line.material as THREE.LineBasicMaterial).opacity = opacity;

          geometry.attributes.position.needsUpdate = true;
        });
      }
    }

    // Create particles
    const particles: ParticleSystem[] = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100;

    for (let i = 0; i < particleCount; i++) {
      const particle = new Particle();
      particles.push(particle);
      scene.add(particle.mesh);
    }

    // Update particles reference
    sceneRef.current.particles = particles;

    // Create connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(6);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color('#ff9500'),
          transparent: true,
          opacity: 0.2,
        });

        const line = new THREE.Line(geometry, material);
        scene.add(line);

        particles[i].connections.push({
          line,
          target: particles[j],
          geometry,
          material,
        });
      }
    }

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    const currentRotation = new THREE.Vector2();
    const rotationSpeed = 0.1;

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      targetRotation.x = mouse.y * 0.5;
      targetRotation.y = mouse.x * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      currentRotation.x += (targetRotation.x - currentRotation.x) * rotationSpeed;
      currentRotation.y += (targetRotation.y - currentRotation.y) * rotationSpeed;

      camera.position.x = Math.sin(currentRotation.y) * 15;
      camera.position.z = Math.cos(currentRotation.y) * 15;
      camera.position.y = currentRotation.x * 5;
      camera.lookAt(scene.position);

      particles.forEach(particle => particle.update());

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Update dispose function with complete cleanup
    sceneRef.current.dispose = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      particles.forEach(particle => {
        particle.geometry.dispose();
        particle.material.dispose();
        particle.connections.forEach(({ geometry, material, line }) => {
          geometry.dispose();
          material.dispose();
          scene.remove(line);
        });
        scene.remove(particle.mesh);
      });

      renderer.dispose();

      const canvas = renderer.domElement;
      canvas.parentElement?.removeChild(canvas);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (sceneRef.current) {
        sceneRef.current.dispose();
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default TransformBackground;