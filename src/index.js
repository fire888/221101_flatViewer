import * as THREE from 'three'
import WebGL from 'three/examples/jsm/capabilities/WebGL';
import { GLTFExporter } from './helpers/GLTFExporter'
//import { createMeshGallery } from './Entities/meshGallery.js'
//import { createMeshSuper } from './Entities/meshSuper'
//import { createMeshStairs } from './Entities/meshStairs'
//import { createMeshWall } from './Entities/meshWall'
//import { createUi } from './ui/ui'
import { createStudio } from './Entities/studio'
import { createContainerFlat } from './Entities/containerFlat'
import texture from './assets/scene-model-map.jpg'


const createrMeshes = root => {
    const {
        studio, 
        exporter,
    } = root

    root.materials = {
        'wallVirtualColor': new THREE.MeshBasicMaterial({
            color: 0xffffff,
            emissive: 0x000000,
            map: root.texture,
            bumpMap: root.texture,
            bumpScale: .1,
            specular: 0xffffff,
            vertexColors: true,
        }),
        'testRed': new THREE.MeshBasicMaterial({
            color: 0xff0000,
        }),
    }
    
    let m 

    const addModel = () => {
        //m.mesh.geometry.computeBoundingSphere()
        studio.addToScene(m.mesh)
        //studio.setTargetCam(m.mesh.geometry.boundingSphere.center)
    }

    const removeModel = () => {
        studio.removeFromScene(m.mesh)
        //m.mesh && m.mesh.geometry.dispose()
        delete m.mesh
        m.meshCollision && m.meshCollision.geometry.dispose()
        delete m.meshCollision
        m.meshCollisionCar && m.meshCollisionCar.geometry.dispose()
        delete m.meshCollisionCar
    }

    const downLoadModel = () => {
        exporter.parse(
            studio.scene,
            function ( gltf ) {
                var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gltf));
                var dlAnchorElem = document.getElementById('downloadAnchorElem');
                dlAnchorElem.setAttribute("href",     dataStr     );
                dlAnchorElem.setAttribute("download", "scene.gltf");
                dlAnchorElem.click();
            },
            function ( error ) {
                console.log( 'An error happened' );
            },
        )
    }

    m = createContainerFlat(root)
    addModel()
}


async function downloadImg () {
    const image = await fetch(texture)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'scene-model-map.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}



const threeApp = () => {
    const studio = createStudio()
    const exporter = new GLTFExporter()

    const animate = () => {
        requestAnimationFrame( animate );
        studio.render()
    }
    animate()

    const root = {
        studio,
        exporter,
    }

    const loader = new THREE.TextureLoader();
    loader.load(texture, texture => { 
        root.texture = texture
        createrMeshes(root) 
    })

    const onWindowResize = () => {
        studio.resize()
    }
    window.addEventListener('resize', onWindowResize, false)
    onWindowResize()

    const isWebGL = () => {
        if ( WebGL.isWebGLAvailable() ) {
        } else {
            const warning = WebGL.getWebGLErrorMessage();
            document.getElementById( 'container' ).appendChild( warning );

        }
    }
    isWebGL()
}



threeApp()
