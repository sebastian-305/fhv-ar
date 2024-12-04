import * as THREE from 'three';
import * as LocAR from 'locar';

const camera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 0.001, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();


document.body.appendChild(renderer.domElement);


window.addEventListener("resize", e => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const locar = new LocAR.LocationBased(scene, camera);

const cam = new LocAR.WebcamRenderer(renderer);


let firstPosition = true;
const oneDegAsRad = THREE.MathUtils.degToRad(1.0);

const indexedObjects = { };

const cube = new THREE.BoxGeometry(20, 20, 20);

let mouseDown = false, initX;
let curRotation = 0.0;

const clickHandler = new LocAR.ClickHandler(renderer);

renderer.domElement.addEventListener("mousedown", e=> {
    mouseDown = true;
    initX = e.clientX;
});

renderer.domElement.addEventListener("mousemove", e=> {
    if(mouseDown) {
        curRotation += e.clientX > initX ? oneDegAsRad*10: -oneDegAsRad*10;
        if(curRotation > Math.PI) {
            curRotation -= 2*Math.PI;
        } else if(curRotation < -Math.PI) {
             curRotation += 2*Math.PI;
        }
        camera.rotation.set(0, curRotation, 0);
    }
});

renderer.domElement.addEventListener("mouseup", e=> {
    mouseDown = false;
    
});

locar.on("gpsupdate", async(pos, distMoved) => {
   
    // Even if you have static AR objects, as opposed to objects from an 
    // API, you must wait until the first GPS update before adding the 
    // objects. This is because the internal x, y and z coordinates of each
    // object are relative to the initial position, and if we do not yet
    // have a GPS position, the initial position will be unknown. 
    if(firstPosition) {
        firstPosition = false;
        const guildhall = new THREE.Mesh(
            cube,
            new THREE.MeshBasicMaterial({color: 0x00ffff})
        );
        const oneills = new THREE.Mesh(
            cube,
            new THREE.MeshBasicMaterial({color: 0xff0000})
        );

        locar.add(guildhall, -1.406392, 50.908042, 0, { "name": "Guildhall"} );
        locar.add(oneills, -1.404340, 50.907330, 0, { "name": "O'Neills"} );
    }

});
locar.fakeGps(-1.404555, 50.908015);

renderer.setAnimationLoop(animate);

function animate() {
    cam.update();
    const objects = clickHandler.raycast(camera, scene);
    if(objects.length) {
        alert(`This is ${objects[0].object.properties.name}`);
    }
    renderer.render(scene, camera);
}
