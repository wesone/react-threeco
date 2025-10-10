import * as THREE from 'three';
import {SVGLoader} from 'three/examples/jsm/loaders/SVGLoader';

const depth = 2;
const material = new THREE.MeshBasicMaterial({color: '#8800ff'});

const generateThreecoMesh = () => {
    const loader = new SVGLoader();
    const svg = loader.parse(`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200.8px"
            height="163px" viewBox="0 0 200.8 163" style="enable-background:new 0 0 200.8 163;" xml:space="preserve">
            <style type="text/css">
                .st0{fill:url(#SVGID_1_);}
                .st1{fill:url(#SVGID_2_);}
                .st2{fill:url(#SVGID_3_);}
                .st3{fill:url(#SVGID_4_);}
                .st4{fill:url(#SVGID_5_);}
                .st5{fill:url(#SVGID_6_);}
                .st6{fill:url(#SVGID_7_);}
                .st7{fill:url(#SVGID_8_);}
                .st8{fill:url(#SVGID_9_);}
                .st9{fill:url(#SVGID_10_);}
            </style>
            <defs>
            </defs>
            <g>
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-0.331" y1="62.2123" x2="200.1774" y2="262.7206">
                    <stop  offset="0" style="stop-color:#FF6000"/>
                    <stop  offset="1" style="stop-color:#8800FF"/>
                </linearGradient>
                <path class="st0" d="M53.7,109.2c-8.4-8.4-17-16.5-25.9-24.3C19,77,9.9,69.4,0,62.5c6.9,9.9,14.5,19,22.3,27.9
                    c7.8,8.9,16,17.5,24.3,25.9c8.4,8.4,17,16.5,25.9,24.3c8.9,7.8,18,15.4,27.9,22.3c-6.9-9.8-14.5-19-22.3-27.9
                    C70.2,126.2,62.1,117.6,53.7,109.2z"/>
                <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="139.9546" y1="102.0887" x2="154.1351" y2="116.2692">
                    <stop  offset="0" style="stop-color:#FF6000"/>
                    <stop  offset="1" style="stop-color:#8800FF"/>
                </linearGradient>
                <path class="st1" d="M172.9,84.9c-8.9,7.8-17.5,16-25.9,24.3c-8.4,8.4-16.5,17-24.3,25.9c-7.8,8.9-15.4,18-22.3,27.9
                    c9.8-6.9,19-14.5,27.9-22.3c8.9-7.8,17.5-16,25.9-24.3c8.4-8.4,16.5-17,24.3-25.9c7.8-8.9,15.4-18,22.3-27.9
                    C191,69.4,181.9,77,172.9,84.9z"/>
                <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-615.2731" y1="-623.7299" x2="811.4724" y2="803.0156">
                    <stop  offset="0" style="stop-color:#FF6000"/>
                    <stop  offset="1" style="stop-color:#8800FF"/>
                </linearGradient>
                <path class="st2" d="M105.4,92c0-11.8-0.3-23.7-1.1-35.5c-0.8-11.8-1.8-23.7-3.9-35.5c-2.1,11.8-3.2,23.7-3.9,35.5
                    c-0.7,11.8-1.1,23.7-1.1,35.5c0,11.8,0.3,23.7,1.1,35.5c0.8,11.8,1.8,23.7,3.9,35.5c2.1-11.8,3.1-23.7,3.9-35.5
                    C105.1,115.6,105.4,103.8,105.4,92z"/>
                <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="42.8058" y1="-61.5165" x2="185.0571" y2="80.7347">
                    <stop  offset="0" style="stop-color:#FF6000"/>
                    <stop  offset="1" style="stop-color:#8800FF"/>
                </linearGradient>
                <path class="st3" d="M105.8,51.8c0.3,1.4,0.7,2.8,1.1,4.3c0.5,1.4,1,2.8,1.6,4.1c2.4,5.4,5.8,10.2,10.1,14.2
                    c4.3,3.9,9.3,6.9,14.7,8.8c5.4,1.9,11.1,2.6,16.6,2.3c11.1-0.7,21.6-5.8,28.8-13.7c7.2-7.8,11.3-18.3,11.2-28.8
                    c0,5.2-1.1,10.5-3.2,15.2c-2.1,4.8-5.2,9.1-9,12.6c-3.8,3.5-8.3,6.1-13.1,7.8c-4.8,1.7-9.8,2.3-14.7,1.9c-9.9-0.7-19-5.3-25.2-12.3
                    c-6.3-6.9-9.8-16.1-9.8-25.2c0-9.2,3.5-18.3,9.8-25.2c3.1-3.5,7-6.4,11.3-8.5s9-3.4,14-3.8c4.9-0.3,10,0.3,14.7,1.9
                    c4.8,1.7,9.3,4.3,13.1,7.8c3.8,3.5,6.9,7.8,9,12.6c2.1,4.8,3.2,10,3.2,15.2c0-10.5-4-20.9-11.2-28.8c-7.2-7.9-17.6-13.1-28.8-13.7
                    c-5.6-0.3-11.3,0.4-16.7,2.3c-5.4,1.9-10.4,4.9-14.7,8.9c-4.3,3.9-7.7,8.8-10.1,14.2c-2.4,5.4-3.6,11.3-3.6,17.2l0.2,4.4
                    C105.3,48.9,105.6,50.4,105.8,51.8z"/>
                <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="12.8674" y1="7.9901" x2="177.6662" y2="172.789">
                    <stop  offset="0" style="stop-color:#FF6000"/>
                    <stop  offset="1" style="stop-color:#8800FF"/>
                </linearGradient>
                <path class="st4" d="M13.7,67.8c2.6,3.6,5.5,6.8,9,9.5c3.5,2.6,7.3,4.7,11.3,6.3c4.1,1.5,8.3,2.3,12.5,2.5l3.2,0
                    c1.1,0,2.1-0.1,3.1-0.2c2.1-0.3,4.2-0.6,6.2-1.2c8-2.2,15.2-6.9,20-13.2c-3.2,2.3-6.6,4.3-10.1,5.7c-3.5,1.4-7.2,2.3-10.9,2.7
                    c-1.8,0.2-3.7,0.2-5.5,0.2c-1.8,0-3.6-0.4-5.4-0.5c-3.5-0.7-6.9-1.8-10.1-3.2c-3.2-1.6-6.1-3.6-8.7-5.8c-2.6-2.4-4.8-5-6.7-7.9
                    c-1.8-2.9-3.2-6.1-4.2-9.4c-1-3.3-1.4-6.7-1.4-10.1c0.1-3.4,0.5-6.8,1.4-10.1c1-3.3,2.4-6.4,4.2-9.4c1.9-2.9,4.1-5.5,6.7-7.9
                    c2.6-2.3,5.6-4.2,8.7-5.8c3.2-1.5,6.6-2.6,10.2-3.2C48.9,6.3,50.7,6,52.5,6c1.8,0,3.7,0,5.5,0.2c3.7,0.4,7.3,1.3,10.9,2.7
                    c3.5,1.4,6.9,3.3,10.1,5.7c-4.8-6.3-12-11-20-13.2c-2-0.6-4.1-0.9-6.2-1.2c-1-0.1-2.1-0.2-3.1-0.2l-3.2,0C42.2,0.3,38,1.1,33.9,2.5
                    c-4,1.5-7.8,3.6-11.3,6.3c-3.4,2.7-6.4,5.9-9,9.5c-2.5,3.6-4.4,7.6-5.8,11.8c-1.3,4.2-1.9,8.6-2,13c0.1,4.4,0.7,8.8,2,13
                    C9.3,60.2,11.2,64.2,13.7,67.8z"/>
            </g>
        </svg>
    `);
    const object = new THREE.Group();

    for(const path of svg.paths)
        for(const shape of SVGLoader.createShapes(path))
        {
            const geometry = new THREE.ExtrudeGeometry(shape, {
                depth,
                bevelEnabled: false
            });
            const mesh = new THREE.Mesh(geometry, material);
            object.add(mesh);
        }

    // offset each mesh by -half the object size to center the whole object
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const xOffset = size.x / -2;
    const yOffset = size.y / -2;
    object.children.forEach(mesh => {
        mesh.position.x = xOffset;
        mesh.position.y = yOffset;
    });

    // rotate -180°
    object.rotateX(-Math.PI);

    return object;
};

export default generateThreecoMesh;
