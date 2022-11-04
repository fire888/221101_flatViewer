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
import texture from './assets/w_ao.jpg'


const createrMeshes = root => {
    const {
        studio, 
    } = root

    
    const m = createContainerFlat(root)
    studio.addToScene(m.mesh)
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
        root.assets = {
            'w_ao_map': texture,
        }
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
