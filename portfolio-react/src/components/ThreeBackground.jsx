import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // SCENE
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0f172a, 0.002);

        // CAMERA
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        // RENDERER
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        // PARTICLES
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 100;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.15,
            color: 0x818cf8,
            transparent: true,
            opacity: 0.8,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // GEOMETRIC SHAPES
        const icoGeometry = new THREE.IcosahedronGeometry(10, 0);
        const icoMaterial = new THREE.MeshBasicMaterial({
            color: 0xa855f7,
            wireframe: true,
            transparent: true,
            opacity: 0.05
        });
        const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
        scene.add(icoMesh);

        // INTERACTION
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // ANIMATION
        const clock = new THREE.Clock();
        let animationId;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Rotate particles
            particlesMesh.rotation.y = elapsedTime * 0.05;
            particlesMesh.rotation.x = elapsedTime * 0.02;

            // Rotate shape
            icoMesh.rotation.x += 0.001;
            icoMesh.rotation.y += 0.001;

            // Mouse Parallax
            const targetX = (mouseX / window.innerWidth - 0.5) * 2;
            const targetY = (mouseY / window.innerHeight - 0.5) * 2;

            particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
            particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

            renderer.render(scene, camera);
        };
        animate();

        // RESIZE
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // CLEANUP
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            mount.removeChild(renderer.domElement);
            // Optional: dispose geometries/materials
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            icoGeometry.dispose();
            icoMaterial.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-900" />;
};

export default ThreeBackground;
