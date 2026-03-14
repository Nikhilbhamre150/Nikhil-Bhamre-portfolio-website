const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector('#bg'),
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z = 30

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
color:0x00eaff,
wireframe:true
})

const cubes=[]

for(let i=0;i<20;i++){

const cube=new THREE.Mesh(geometry,material)

cube.position.x=Math.random()*50-25
cube.position.y=Math.random()*50-25
cube.position.z=Math.random()*50-25

scene.add(cube)

cubes.push(cube)

}

function animate(){

requestAnimationFrame(animate)

cubes.forEach(cube=>{

cube.rotation.x+=0.01
cube.rotation.y+=0.01

})

renderer.render(scene,camera)

}

animate()