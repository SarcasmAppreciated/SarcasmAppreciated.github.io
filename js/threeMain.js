import {
    Box3,
    Mesh,
    MeshBasicMaterial,
    PCFSoftShadowMap,
    PerspectiveCamera,
    Raycaster,
    Scene,
    SphereGeometry,
    Vector2,
    Vector3,
    WebGLRenderer
} from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { checkMobile } from './portfolio';

const gridElements = [
    {title: "Travis Gafford Industries", subtitle: "- Circa. 2018 to Present -", text: "Graphic design, brand and web development for League of Legends' predominant media company; check out Hotline League!", clickThrough: "https://www.behance.net/gallery/56894655/Overlays-and-Branding", clickText: "Behance Page"},
    {title: "Amazon: Software Engineer", subtitle: "- June 2017 to June 2023 -", text: "Amazon Display Ad Products: architected and developed products generating millions of revenue.", clickThrough: "https://amazonfiretv.blog/immerse-yourself-in-middle-earth-with-the-lord-of-the-rings-the-rings-of-power-bb76cc29a9ff", clickText: "Case Study"},
    {title: "Pokimane Podcast", subtitle: "- Completed March 2018 -", text: "Dynamic start and intermission screens", clickThrough: "https://archive.org/details/twitch-vod-v282019111", clickText: "Podcast"},
    {title: "Ample Food Icons", subtitle: "- Completed January 2017 -", text: "Web icons and infographic", clickThrough: "https://www.behance.net/gallery/49921415/AmpleMealcom", clickText: "Behance Page"},
    {title: "HipHopHeads Polls", subtitle: "- Circa March 2016 -", text: "Polled music player", clickThrough: "", clickText: "Case Study"},
    {title: "Gamespot", subtitle: "- March 2014 - February 2016 -", text: "Graphic design for onGamers and G | League", clickThrough: "https://www.behance.net/SarcasmAppreciated", clickText: "Behance Page"}
];

let perspectiveCamera, controls, scene, renderer, labelRenderer;
let mouse, raycaster, pokeballs, labelDiv, label, currentHover, blurbDiv, blurb;

init();
animate();

function init() {
    const sky = document.getElementById('sky');
    perspectiveCamera = new PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.03, 10000);
    perspectiveCamera.position.z = 500;

    // world
    scene = new Scene();

    const geometry = new SphereGeometry(0.5, 32, 16);

    raycaster = new Raycaster();
    mouse = new Vector2();
    
    pokeballs = [];
    let lSIC = [0.85, 11, -11];
    let rSIC = [2, 10.6, -10.5];
    const leftLabels = [gridElements[0].title, gridElements[1].title, gridElements[4].title];
    const rightLabels = [gridElements[2].title, gridElements[3].title, gridElements[5].title];
    for (let i = 0; i < 3; i++) {
        const material = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 });
        const materialRight = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 });
        const sphereLeft = new Mesh(geometry, material);
        const sphereRight = new Mesh(geometry, materialRight);
        sphereLeft.name = leftLabels[i];
        sphereRight.name = rightLabels[i];
        sphereLeft.position.set(lSIC[0], lSIC[1], lSIC[2]);
        sphereRight.position.set(rSIC[0], rSIC[1], rSIC[2]);
        scene.add(sphereLeft);
        scene.add(sphereRight);
        pokeballs.push(sphereLeft);
        pokeballs.push(sphereRight);
        lSIC[0] -= 0.55;
        rSIC[0] -= 0.55;
        lSIC[1] -= 0.5;
        rSIC[1] -= 0.5;
        lSIC[2] += 0.8;
        rSIC[2] += 0.8;
    }

    // Setup labels
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.pointerEvents = 'none';
    sky.appendChild(labelRenderer.domElement);

    labelDiv = document.createElement('div');
    labelDiv.className = 'label';
    labelDiv.style.marginTop = '-1em';
    label = new CSS2DObject(labelDiv);
    label.visible = false;
    scene.add(label);

    blurbDiv = document.createElement('div');
    blurbDiv.id = "main-blurb";
    blurbDiv.className = 'blurb';
    blurbDiv.style.marginTop = '-1em';
    const blurbCloseCharDiv = document.createElement('p');
    blurbCloseCharDiv.className = 'blurb-close-text';
    blurbCloseCharDiv.textContent = "X";
    const blurbCloseDiv = document.createElement('div');
    blurbCloseDiv.id = 'blurb-close';
    blurbCloseDiv.style.pointerEvents = 'auto';
    blurbCloseDiv.addEventListener('click', function(e) {
        e.preventDefault();
        blurb.visible = false;
    });
    blurbCloseDiv.append(blurbCloseCharDiv);
    const blurbTitleDiv = document.createElement('h2');
    blurbTitleDiv.className = 'blurb-title';
    const blurbSubTitleDiv = document.createElement('p');
    blurbSubTitleDiv.className = 'blurb-paragraph';
    const blurbSummaryDiv = document.createElement('p');
    blurbSummaryDiv.className = 'blurb-paragraph';
    const blurbButtonDiv = document.createElement('button');
    blurbButtonDiv.id = 'blurb-button';
    blurbButtonDiv.style.pointerEvents = 'auto';
    blurbButtonDiv.addEventListener('pointerdown', function(e) {
        e.preventDefault();
        window.open(e.target.attributes.clickthrough.value);
    });
    blurbDiv.append(blurbCloseDiv);
    blurbDiv.append(blurbTitleDiv);
    blurbDiv.append(blurbSubTitleDiv);
    blurbDiv.append(blurbSummaryDiv);
    blurbDiv.append(blurbButtonDiv);
    blurb = new CSS2DObject(blurbDiv);
    if (checkMobile()) {
        blurb.position.set(0, -15, 0);
    } else {
        blurb.position.set(20, 0, 0);
    }
    blurb.visible = false;
    scene.add(blurb);
    blurbTitleDiv.addEventListener('click', function(e) {
        e.preventDefault();
        blurb.visible = false;
    });

    const instructionDiv = document.createElement('div');
    instructionDiv.className = 'blurb';
    instructionDiv.style.marginTop = '-1em';
    instructionDiv.style.pointerEvents = 'auto';
    const firstInstructionDiv = document.createElement('p');
    firstInstructionDiv.className = 'blurb-paragraph';
    firstInstructionDiv.textContent = 'Click on one of the pokeballs on the healing machine!';
    const secondInstructionDiv = document.createElement('p');
    secondInstructionDiv.className = 'blurb-paragraph';
    secondInstructionDiv.textContent = "Feel free to pan and zoom in/out around :)"
    instructionDiv.append(firstInstructionDiv);
    instructionDiv.append(secondInstructionDiv);
    const instruction = new CSS2DObject(instructionDiv);
    if (checkMobile()) {
        instruction.position.set(-9, 8, 0);
    } else {
        instruction.position.set(-12, 5, 0);
    }
    scene.add(instruction);
    instructionDiv.addEventListener('click', function(e) {
        e.preventDefault();
        if (checkMobile()) {
            instruction.visible = false;
        }
    });

    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    sky.appendChild(renderer.domElement);

    sky.addEventListener('resize', onWindowResize);
    sky.addEventListener('mousemove', onMouseMove);
    sky.addEventListener('click', onClick);

    const loader = new GLTFLoader();
    loader.load('pkmn_centre.glb', function (gltf) {
        const model = gltf.scene;
        model.scale.set(30, 30, 30);
        model.rotation.x += 0.6;
        model.rotation.y += -0.5;
        model.position.set(-2.5, 0, 0);
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });

    createControls(perspectiveCamera);
}

function createControls(camera) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.75;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 1.0;
}

function onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    perspectiveCamera.aspect = width / height;
    perspectiveCamera.updateProjectionMatrix();
    renderer.setSize(width, height);
    labelRenderer.setSize(width, height);
}

function onClick(e) {
    e.preventDefault();
    const { innerWidth, innerHeight } = window;
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, perspectiveCamera);
    const [clicked] = raycaster.intersectObjects(pokeballs);

    if (clicked) {
        renderer.domElement.className = 'hovered';
        blurb.visible = true;

        const element = gridElements.filter(obj => { return obj.title === clicked.object.name})[0];
        blurbDiv.children[1].textContent = element.title;
        blurbDiv.children[2].textContent = element.subtitle;
        blurbDiv.children[3].textContent = element.text;
        blurbDiv.children[4].textContent = element.clickText;
        blurbDiv.children[4].setAttribute("clickThrough", element.clickThrough);
    }
}

function onMouseMove(e) {
    e.preventDefault();
    const { innerWidth, innerHeight } = window;
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, perspectiveCamera);
    const [hovered] = raycaster.intersectObjects(pokeballs);

    if (hovered) {
        if (!currentHover) {
            currentHover = hovered;
        } else if (currentHover && hovered !== currentHover) {
            currentHover.object.material.opacity = 0.0;
            currentHover = hovered;
        }
        if (!checkMobile()) {
            renderer.domElement.className = 'hovered';
            label.visible = true;
            labelDiv.textContent = hovered.object.name;

            // Get offset from object's dimensions
            const offset = new Vector3();
            new Box3().setFromObject(hovered.object).getSize(offset);

            // Move label over hovered element
            label.position.set(
                hovered.object.position.x,
                hovered.object.position.y + 2,
                hovered.object.position.z
            );

            hovered.object.material.opacity = 1.0;
        }
    } else {
        renderer.domElement.className = '';
        label.visible = false;
        labelDiv.textContent = '';
        if (currentHover) {
            currentHover.object.material.opacity = 0.0;
            currentHover = null;
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
    const camera = perspectiveCamera;
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}