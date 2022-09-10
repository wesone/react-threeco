import * as THREE from 'three';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';

import {SSAARenderPass} from 'three/examples/jsm/postprocessing/SSAARenderPass';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';

import generateThreecoMesh from './generateThreecoMesh';

const generatePostProcessingStack = (scene, camera) => {
    const postProcessingStack = [];

    // with EffectComposer, "antialias: true" of WebGLRenderer (which uses MSAA) won't work...
    // Antialias with SSAARenderPass will look better than MSAA but it costs more peformance
    const ssaaRenderPass = new SSAARenderPass(scene, camera/* , clearColor, clearAlpha */);
    postProcessingStack.push(ssaaRenderPass);

    const unrealBloomPass = new UnrealBloomPass(256, .8, 1.4, 0);
    postProcessingStack.push(unrealBloomPass);

    return postProcessingStack;
};

const init = domRef => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    for(const pass of generatePostProcessingStack(scene, camera))
        composer.addPass(pass);

    camera.up = new THREE.Vector3(0, 0, 1);
    camera.position.z = 200;

    const center = new THREE.Vector3();
    camera.lookAt(center);
    camera.rotation.z = 0;

    scene.add(new THREE.AmbientLight(0x444444));

    const mesh = generateThreecoMesh();
    mesh.position.copy(center);
    scene.add(mesh);

    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);
    onWindowResize();

    domRef.current.appendChild(renderer.domElement);

    const rotationSpeed = .25;

    return {
        onUpdate: deltaTime => {
            mesh.rotation.y -= rotationSpeed * deltaTime;
        },
        onRender: () => {
            // renderer.render(scene, camera);
            composer.render();
        }, 
        onUnmount: () => {
            window.removeEventListener('resize', onWindowResize);
            domRef.current.removeChild(renderer.domElement);
        },
        // autorun: false
    };
};

export default init;
