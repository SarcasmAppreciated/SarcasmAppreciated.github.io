import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

import { OutsideEdgesGeometry } from './conditional_lines/OutsideEdgesGeometry.js';
import { ConditionalEdgesGeometry } from './conditional_lines/ConditionalEdgesGeometry.js';
import { ConditionalEdgesShader } from './conditional_lines/ConditionalEdgesShader.js';
import { ConditionalLineSegmentsGeometry } from './conditional_lines/Lines2/ConditionalLineSegmentsGeometry.js';
import { ConditionalLineMaterial } from './conditional_lines/Lines2/ConditionalLineMaterial.js';
import { ColoredShadowMaterial } from './conditional_lines/ColoredShadowMaterial.js';

let perspectiveCamera, controls, scene, renderer, edgesModel, depthModel, originalModel, backgroundModel, conditionalModel, shadowModel;
const models = {};
const LIGHT_BACKGROUND = 0x000000;
const LIGHT_MODEL = 0xffffff;
const LIGHT_LINES = 0xffffff;
const LIGHT_SHADOW = 0xc4c9cb;

const DARK_BACKGROUND = 0x111111;
const DARK_MODEL = 0x111111;
const DARK_LINES = 0xb0bec5;
const DARK_SHADOW = 0x2c2e2f;

var params = {
    colors: 'LIGHT',

    lit: false,
    opacity: 0.5,
    threshold: 40,
    display: 'THRESHOLD_EDGES',
    displayConditionalEdges: true,
    thickness: 1,
    useThickLines: true,
    model: 'THINK'
};

init();
animate();

function init() {
    perspectiveCamera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.03, 10000);
    perspectiveCamera.position.z = 500;

    // world
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x999999);

    /*const material = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 });
    const points = [];
    // points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(-4, 9, -25));
    points.push(new THREE.Vector3(15, 15, 15));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);*/

    const geometry = new THREE.SphereGeometry(0.5, 32, 16); 
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 }); 
    
    let pokeballs = [];
    let lSIC = [0.85, 1, -11];
    let rSIC = [2, 0.6, -10.5];
    for (let i = 0; i < 3; i++) {
        const sphereLeft = new THREE.Mesh(geometry, material);
        const sphereRight = new THREE.Mesh(geometry, material);
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

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.getElementById("sky").appendChild(renderer.domElement);
    
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);

    const loader = new GLTFLoader();
    loader.load('pkmn_centre.glb', function (gltf) {
        const model = gltf.scene;
        model.scale.set(30, 30, 30);
        model.rotation.x += 0.6;
        model.rotation.y += -0.5;
        model.position.set(-2.5, -10, 0);
        scene.add(gltf.scene);
        
        /*const model = mergeObject(gltf.scene);
        model.scale.set(40, 40, 40);
        model.children[0].geometry.computeBoundingBox();
        model.children[0].castShadow = true;

        models.THINK = model;
        updateModel();*/
    }, undefined, function (error) {
        console.error(error);
    });

    createControls(perspectiveCamera);
}

function updateModel() {
    originalModel = models[params.model];
    initEdgesModel();
    initBackgroundModel();
    initConditionalModel();
}

function mergeObject(object) {
    object.updateMatrixWorld(true);
    const geometry = [];
    object.traverse(c => {
        if (c.isMesh) {
            const g = c.geometry;
            g.applyMatrix4(c.matrixWorld);
            for (const key in g.attributes) {
                if (key !== 'position' && key !== 'normal') {
                    g.deleteAttribute(key);
                }
            }
            geometry.push(g.toNonIndexed());
        }
    });

    const mergedGeometries = BufferGeometryUtils.mergeGeometries(geometry, false);
    const mergedGeometry = BufferGeometryUtils.mergeVertices(mergedGeometries).center();

    const group = new THREE.Group();
    const mesh = new THREE.Mesh(mergedGeometry);
    group.add(mesh);
    return group;
}

function initBackgroundModel() {
    if (backgroundModel) {
        backgroundModel.parent.remove(backgroundModel);
        shadowModel.parent.remove(shadowModel);
        depthModel.parent.remove(depthModel);
        backgroundModel.traverse(c => {
            if (c.isMesh) {
                c.material.dispose();
            }
        });
        shadowModel.traverse(c => {
            if (c.isMesh) {
                c.material.dispose();
            }
        });
        depthModel.traverse(c => {
            if (c.isMesh) {
                c.material.dispose();
            }
        });
    }

    if (!originalModel) {
        return;
    }

    backgroundModel = originalModel.clone();
    backgroundModel.traverse(c => {
        if (c.isMesh) {
            c.material = new THREE.MeshBasicMaterial({ color: LIGHT_MODEL });
            c.material.polygonOffset = true;
            c.material.polygonOffsetFactor = 1;
            c.material.polygonOffsetUnits = 1;
            c.renderOrder = 2;
        }
    });
    scene.add(backgroundModel);

    shadowModel = originalModel.clone();
    shadowModel.traverse(c => {

        if (c.isMesh) {
            c.material = new ColoredShadowMaterial({ color: LIGHT_MODEL, shininess: 1.0 });
            c.material.polygonOffset = true;
            c.material.polygonOffsetFactor = 1;
            c.material.polygonOffsetUnits = 1;
            c.receiveShadow = true;
            c.renderOrder = 2;
        }
    });
    scene.add(shadowModel);

    depthModel = originalModel.clone();
    depthModel.traverse(c => {
        if (c.isMesh) {
            c.material = new THREE.MeshBasicMaterial({ color: LIGHT_MODEL });
            c.material.polygonOffset = true;
            c.material.polygonOffsetFactor = 1;
            c.material.polygonOffsetUnits = 1;
            c.material.colorWrite = false;
            c.renderOrder = 1;
        }
    });
    scene.add(depthModel);
}

function initEdgesModel() {
    // remove any previous model
    if (edgesModel) {
        edgesModel.parent.remove(edgesModel);
        edgesModel.traverse(c => {
            if (c.isMesh) {
                if (Array.isArray(c.material)) {
                    c.material.forEach(m => m.dispose());
                } else {
                    c.material.dispose();
                }
            }
        });
    }

    // early out if there's no model loaded
    if (!originalModel) {
        return;
    }

    // store the model and add it to the scene to display
    // behind the lines
    edgesModel = originalModel.clone();
    scene.add(edgesModel);

    // early out if we're not displaying any type of edge
    if (params.display === 'NONE') {
        edgesModel.visible = false;
        return;
    }

    const meshes = [];
    edgesModel.traverse(c => {
        if (c.isMesh) {
            meshes.push(c);
        }
    });
    for (const key in meshes) {
        const mesh = meshes[key];
        const parent = mesh.parent;
        let lineGeom;
        if (params.display === 'THRESHOLD_EDGES') {
            lineGeom = new THREE.EdgesGeometry(mesh.geometry, params.threshold);
        } else {
            const mergeGeom = mesh.geometry.clone();
            mergeGeom.deleteAttribute('uv');
            mergeGeom.deleteAttribute('uv2');
            lineGeom = new OutsideEdgesGeometry(BufferGeometryUtils.mergeVertices(mergeGeom, 1e-3));
        }

        const line = new THREE.LineSegments(lineGeom, new THREE.LineBasicMaterial({ color: LIGHT_LINES }));
        line.position.copy(mesh.position);
        line.scale.copy(mesh.scale);
        line.rotation.copy(mesh.rotation);

        const thickLineGeom = new LineSegmentsGeometry().fromEdgesGeometry(lineGeom);
        const thickLines = new THREE.LineSegments(thickLineGeom, new THREE.LineBasicMaterial({ color: LIGHT_LINES, linewidth: 3 }));
        thickLines.position.copy(mesh.position);
        thickLines.scale.copy(mesh.scale);
        thickLines.rotation.copy(mesh.rotation);

        parent.remove(mesh);
        parent.add(line);
        parent.add(thickLines);
    }

}

function initConditionalModel() {
    // remove the original model
    if (conditionalModel) {
        conditionalModel.parent.remove(conditionalModel);
        conditionalModel.traverse(c => {
            if (c.isMesh) {
                c.material.dispose();
            }
        });
    }

    // if we have no loaded model then exit
    if (! originalModel) {
        return;
    }

    conditionalModel = originalModel.clone();
    scene.add(conditionalModel);
    conditionalModel.visible = false;

    // get all meshes
    const meshes = [];
    conditionalModel.traverse(c => {
        if (c.isMesh) {
            meshes.push(c);
        }
    });

    for (const key in meshes) {
        const mesh = meshes[key];
        const parent = mesh.parent;
        // Remove everything but the position attribute
        const mergedGeom = mesh.geometry.clone();
        for (const key in mergedGeom.attributes) {
            if (key !== 'position') {
                mergedGeom.deleteAttribute(key);
            }
        }

        // Create the conditional edges geometry and associated material
        const lineGeom = new ConditionalEdgesGeometry(BufferGeometryUtils.mergeVertices(mergedGeom));
        const material = new THREE.ShaderMaterial(ConditionalEdgesShader);
        material.uniforms.diffuse.value.set(LIGHT_LINES);

        // Create the line segments objects and replace the mesh
        const line = new THREE.LineSegments(lineGeom, material);
        line.position.copy(mesh.position);
        line.scale.copy(mesh.scale);
        line.rotation.copy(mesh.rotation);

        const thickLineGeom = new ConditionalLineSegmentsGeometry().fromConditionalEdgesGeometry(lineGeom);
        const thickLines = new LineSegments2(thickLineGeom, new ConditionalLineMaterial({ color: LIGHT_LINES, linewidth: 2 }));
        thickLines.position.copy(mesh.position);
        thickLines.scale.copy(mesh.scale);
        thickLines.rotation.copy(mesh.rotation);

        parent.remove(mesh);
        parent.add(line);
        parent.add(thickLines);
    }
}

function createControls(camera) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.75;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 1.0;
}

function onWindowResize() {
    perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
    perspectiveCamera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.handleResize();
}

function onMouseMove(clientX, clientY) {
    const { innerWidth, innerHeight } = window;

    mouse.x = (clientX / innerWidth) * 2 - 1;
    mouse.y = -(clientY / innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);
    let linesColor = LIGHT_LINES;
    let modelColor = LIGHT_MODEL;
    let backgroundColor = LIGHT_BACKGROUND;
    let shadowColor = LIGHT_SHADOW;

    if (params.colors === 'DARK') {
        linesColor = DARK_LINES;
        modelColor = DARK_MODEL;
        backgroundColor = DARK_BACKGROUND;
        shadowColor = DARK_SHADOW;

    } else if (params.colors === 'CUSTOM') {
        linesColor = params.lineColor;
        modelColor = params.modelColor;
        backgroundColor = params.backgroundColor;
        shadowColor = params.shadowColor;
    }

    if (conditionalModel) {
        conditionalModel.visible = params.displayConditionalEdges;
        conditionalModel.traverse( c => {
            if (c.material && c.material.resolution) {
                renderer.getSize(c.material.resolution);
                c.material.resolution.multiplyScalar(window.devicePixelRatio);
                c.material.linewidth = params.thickness;
            }
            if (c.material) {
                c.visible = c instanceof LineSegments2 ? params.useThickLines : ! params.useThickLines;
                c.material.uniforms.diffuse.value.set(linesColor);
            }
        } );
    }

    if (edgesModel) {
        edgesModel.traverse(c => {
            if (c.material && c.material.resolution) {
                renderer.getSize(c.material.resolution);
                c.material.resolution.multiplyScalar(window.devicePixelRatio);
                c.material.linewidth = params.thickness;
            }
            if (c.material) {
                c.visible = c instanceof LineSegments2 ? params.useThickLines : ! params.useThickLines;
                c.material.color.set(linesColor);
            }
        } );
    }

    if (backgroundModel) {
        backgroundModel.visible = ! params.lit;
        backgroundModel.traverse(c => {
            if (c.isMesh) {
                c.material.transparent = params.opacity !== 1.0;
                c.material.opacity = params.opacity;
                c.material.color.set(modelColor);
            }
        } );
    }

    if (shadowModel) {
        shadowModel.visible = params.lit;
        shadowModel.traverse(c => {
            if (c.isMesh) {
                c.material.transparent = params.opacity !== 1.0;
                c.material.opacity = params.opacity;
                c.material.color.set(modelColor);
                c.material.shadowColor.set(shadowColor);
            }
        } );
    }

    scene.background.set(backgroundColor);
    controls.update();
    render();
}

function render() {
    const camera = perspectiveCamera;
    renderer.render(scene, camera);
}