// The detector will show a warning if the current browser does not support WebGL.
if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
}

// All of these variables will be needed later, just ignore them for now.
var container;
var camera, controls, scene, renderer;
var lighting, ambient, keyLight, fillLight, backLight;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var object;
var rotation_y=0.01;
var rotation_x=0.00;
$(function(){
	console.log('document ready');
	init();
render();

});

function init() {
    container = document.createElement('div');
	
	
    document.getElementById('threeD').appendChild(container);
    // Code...
	camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 10, 30);
camera.position.z = 20;
	scene = new THREE.Scene();
ambient = new THREE.AmbientLight(0xffffff);
scene.add(ambient);
	keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(100, 100%, 100%)'), 1.5);
keyLight.position.set(-100, 0, 100);

fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(100, 100%, 100%)'), 1.5);
fillLight.position.set(50, 0, 50);

backLight = new THREE.DirectionalLight(0xffffff,1.0);
backLight.position.set(20, 0, -20).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);
	var mtlLoader = new THREE.MTLLoader();
//mtlLoader.setBaseUrl('/');
mtlLoader.setPath('PokemonFiles/001/');
mtlLoader.load('Fushigidane.mtl', function (materials) {

    materials.preload();

    //materials.materials.default.map.magFilter = THREE.NearestFilter;
    //materials.materials.default.map.minFilter = THREE.LinearFilter;

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('PokemonFiles/001/');
    objLoader.load('Bulbasaur.obj', function (object) {
			this.object=object;
        scene.add(object);

    });

});
	renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));

container.appendChild(renderer.domElement);
	controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
	controls.enablePan=false;
controls.dampingFactor = 0.25;
controls.enableZoom = false;
}

function render() {
    // Code...
	requestAnimationFrame(render);
	object.rotation.x += rotation_x;
				object.rotation.y += rotation_y;
    controls.update();
    renderer.render(scene, camera);
}