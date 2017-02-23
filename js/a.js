// 场景
var scene = new THREE.Scene();
// 网格
var geometry = new THREE.BoxGeometry(100, 100, 100);
var material = new THREE.MeshLambertMaterial({
	color: "#ff0"
})
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// 灯光
var light = new THREE.PointLight('#fff');
light.position.set(300, 400, 200);
scene.add(light);
scene.add(new THREE.AmbientLight('#333'))
// 相机
var camera = new THREE.PerspectiveCamera(40, 800 / 600, 1, 1000)
camera.position.set(200, 200, 200)
camera.lookAt(scene.position)
/*
	引入obj加载器
*/
var loader = new THREE.OBJLoader()
loader.load('./images/female02/female02.obj', function(female02){
	scene.add(female02)
})
// 渲染器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600)
document.body.appendChild(renderer.domElement)
// 渲染
renderer.render(scene, camera)
// 相机控制器
var controls = new THREE.OrbitControls(camera)
controls.addEventListener('change', render,false)
function render (){
	renderer.render(scene, camera)
}
render()