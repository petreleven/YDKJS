var scene, renderer;
var camera;
var mesh;
var mixer;


var isMouseDown = false;

function init() {

    // create a new scene
    scene = new THREE.Scene();

    // create a new camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 25;
    camera.position.y = 15;

    // create a new renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // set the background color
    renderer.setClearColor(0x00ffff, 1);
    renderer.gammaOutput = true;

    // add lights to the scene
    var light = new THREE.DirectionalLight("#c1582d", 1);
    var ambient = new THREE.AmbientLight("#ffffff");
    light.position.set(0, -70, 100).normalize();
    scene.add(light);
    scene.add(ambient);

    // create a new texture object
    var texture = new THREE.Texture();

    // create a new manager object to handle loading events
    var manager = new THREE.LoadingManager();
    manager.onProgress = function(item, loaded, total) {};

    // create callbacks for loading progress and errors
    var onProgress = function(xhr) {};
    var onError = function(xhr) {};

    // create a new GLTFLoader object to load the GLB file
    var loader = new THREE.GLTFLoader();

    // load the GLB file
    loader.load(
        // resource URL
        'https://sketchfab-prod-media.s3.amazonaws.com/archives/6db0b351424141099e30834c6115f40a/glb/0abc403291314cba912eca2949c4d264/tiny_isometric_room.glb?AWSAccessKeyId=ASIAZ4EAQ242HMK7RZPA&Signature=59To5vSKk54dmoQosk4CSckgcoE%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIAXfR%2BOmm5iNmjlczOKvwY3WViqMh6l%2FM5B8wUUY4nDEAiEAi27ou%2FVh%2Bmz%2BIW5ikNa2BnrFcoe4VJTIhUdNphx0dO8quwUI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Nzg4NzQzNzE4OTIiDMfI1kUBpjWctEIDhCqPBdloK88o6Xmsiz8kON%2BrRYKscjAVdqpFEUdpzj3%2Fnenfe%2BafihZuc%2BQRWkXPFsIAoEqmawsZ%2Bq89bS1a9sndvl2W4x5WuYJapGY1tWBqKDwsz2Y5b4QxVHagzIqQSclOn%2B8AwE8ejG%2ByFK0q9Fk69GTxCqVDYZ%2BUYLoscnQq4pn1aABQtK8Ht3GNQIm4iCDjPj0z0lbcy%2FiXM3%2BcbJEAJ%2FPuzPzvOHlPwTif9NV0DBkSc61G6pxK2LT0ZQjA6KijcbtO28RR2dxiZpSgrXC%2BeT5mynmj%2BZ4pwSrT7wZgl5yJmvN3VNhUT9vv%2Bu3FsOiRpTOqWMAauyNxn9Yhx5BZKuSFuZcgm0lwjiVNECo41J3gmcg1gutd%2FwQfKQHQ2ZP6hXrOpLXSEr9LKWa7C%2FIN7TvaI94yorVYadzD0xwXGMth0PV1wqsQNTMjVfhOvLHHP8W4FaRrpZAUuhtzKqjRzcq1uOy8QLVAhp4M1yzShQWKUgA8TfH2g2UYq6VTTPdj%2FJRct3Dn190jgrTR7Oay%2F2TqIGpivroQjt04b51fqisbKacA1WTwnJgoBS1kvXDlP%2FsnTKddf1mSDXARgFN%2BCuLNvTnqQgIa9eAL7ce8lGtYCVrkBrc%2BBCy0TIm9RX%2F0QdSGo4Bj5g2%2FCDOLllApdhrqsPZZHLZRqJQMPVZmxQYMGjSKE6YV0csH7xyoY1hVeZ12Sfd5a99XnQpkKOJRIH0oOdoaxK3%2Faq4OMKSwdATTHE6Pc9tFGTua8bxk3rPaePt4T5W6IbQD0hMQ7fEADhTmnnzBxENAa6%2B0Sem6g7erTirjeU30AGBJAqnWB4bJS6kXyBnhjRbKHbqZH5DirsGbMrX4OrxT6nhj%2Bf2nqhowu%2FDNogY6sQGkaQmDkOZ8vTLPHlM0FJcMl4yDiIU%2B5v8KITwrKgCGUex%2BgLLYyHWVivFX9LnGxGMteBKNHFaVx0x7qt2kG19drk4itjETQiJwZKz8VT7hiyroX%2Bo5LMoWqc4GVOEM6fZGSDz7L0NRGGBlyZF0m0xdPja7e2JJVLocaR0Kb%2BwUAR7utyEBlnBSi3NJ8kKadzWSW%2BmslqoSnKIF0E99PqGq%2B0naOR34BXjD%2Fj4rjArdmlI%3D&Expires=1683194221',
        // called when the resource is loaded
        function(gltf) {
            // get the mesh from the loaded scene
            mesh = gltf.scene;
            mesh.scale.set(1, 1, 1);
            scene.add(mesh);
            mixer = new THREE.AnimationMixer(gltf.scene);
            var animation = gltf.animations[0];
            var action = mixer.clipAction(animation);
            action.play();
        },
        // called when loading is in progress
        function(xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // called when loading has errors
        function(error) {
            console.log('An error happened');
        }
    );

    // add event listeners for mouse and touch events
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);
    renderer.domElement.addEventListener('mousewheel', onDocumentMouseWheel, false);
    renderer.domElement.addEventListener('DOMMouseScroll', onDocumentMouseWheel, false);

    function onDocumentMouseWheel(event) {
        event.preventDefault();
        var delta = 0;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 12;
        } else if (event.detail) {
            delta = -event.detail / 3;
        }
        camera.position.z += delta;
    }

    // start rendering the scene
    render();
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    if (mixer) {
        mixer.update(0.01);
    }
}

// mouse down event handler
function onMouseDown(event) {
    isMouseDown = true;
}

// mouse move event handler
function onMouseMove(event) {
    if (isMouseDown) {
        // rotate the mesh along the X and Y axes
        if (mesh) {
            mesh.rotation.y = getMouseX(event) / 50;
            mesh.rotation.x = getMouseY(event) / 50;
        }
    }
}

// mouse up event handler
function onMouseUp(event) {
    isMouseDown = false;
}

// helper function to get the X coordinate of the mouse/touch event
function getMouseX(event) {
    if (event.type.indexOf("touch") == -1)
        return event.clientX;
    else
        return event.touches[0].clientX;
}

function getMouseY(event) {
    if (event.type.indexOf("touch") == -1)
        return event.clientY;
    else
        return event.touches[0].clientY;
}


window.addEventListener('DOMContentLoaded', init);