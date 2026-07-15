document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create an Icosahedron geometry (neural core / abstract AI node)
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    
    // Material 1: Wireframe with primary color
    const materialWireframe = new THREE.MeshBasicMaterial({ 
        color: 0x8B5CF6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.6 
    });
    
    // Material 2: Solid core with fuchsia tint
    const materialSolid = new THREE.MeshStandardMaterial({ 
        color: 0x050816, 
        emissive: 0xD946EF,
        emissiveIntensity: 0.2,
        roughness: 0.4,
        metalness: 0.8
    });

    const sphere = new THREE.Mesh(geometry, materialSolid);
    const wireframe = new THREE.Mesh(geometry, materialWireframe);
    
    // Scale wireframe slightly larger to encompass solid core
    wireframe.scale.set(1.05, 1.05, 1.05);
    
    scene.add(sphere);
    scene.add(wireframe);

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xD946EF, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Interactive variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Handle Resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    // Animation Loop
    const animate = function () {
        requestAnimationFrame(animate);

        targetX = mouseX * .001;
        targetY = mouseY * .001;

        sphere.rotation.y += 0.005;
        sphere.rotation.x += 0.002;
        
        wireframe.rotation.y -= 0.003;
        wireframe.rotation.x -= 0.004;

        // Interactive mouse rotation
        sphere.rotation.y += 0.05 * (targetX - sphere.rotation.y);
        sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x);
        
        wireframe.rotation.y += 0.05 * (targetX - wireframe.rotation.y);
        wireframe.rotation.x += 0.05 * (targetY - wireframe.rotation.x);

        renderer.render(scene, camera);
    };

    animate();
});
