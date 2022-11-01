import * as THREE from 'three'
import dataRooms from '../data/sample-room.json'
import { createArea } from './geometryRoom/geometryArea.js'
import { createWall } from './geometryRoom/geomWall'
import { createArtefact } from './geometryRoom/geomArtefact'


export const createMeshFlat = (root) => {

    const materials = {
        room: new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            specular: 0x333333,
            vertexColors: true,
        }),
        wall: new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            specular: 0x333333,
            vertexColors: true,
        }),
        artefact: new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            specular: 0x333333,
            vertexColors: true,
        }),
    }


    const arrV = []
    const arrC = []
    const arrUV = []



    const cont = new THREE.Object3D() 
    cont.scale.set(0.01, 0.01, 0.01)

    const arrRooms = []
    for (let i = 0; i < dataRooms.rooms[0].length; ++i) {
        const r = dataRooms.rooms[0][i]
        const d = createArea(r, materials.room)
        cont.add(d)
    }
    for (let i = 0; i < dataRooms['outer-perimeter'][0].length; ++i) {
        const r = dataRooms['outer-perimeter'][0][i]
        const d = createWall(r, materials.wall)
        cont.add(d)
    }
    for (let i = 0; i < dataRooms['inner-perimeters'][0].length; ++i) {
        const r = dataRooms['inner-perimeters'][0][i]
        const d = createWall(r, materials.wall)
        cont.add(d)
    }
    for (let i = 0; i < dataRooms['objects'][0].length; ++i) {
        const r = dataRooms['objects'][0][i]
        const d = createArtefact(r, materials.wall)
        cont.add(d)
    }

    // const r = dataRooms['outer-perimeter'][0][4]
    // const d = createWall(r, materials.wall)
    // cont.add(d)




    const vertices = new Float32Array(arrV)
    const colors =  new Float32Array(arrC)
    const uv = new Float32Array(arrUV)

    /** mesh main */
    //const geometry = new THREE.BufferGeometry()
    //geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    //geometry.setAttribute('color', new THREE.BufferAttribute( colors, 3 ))
    //uv && geometry.setAttribute('uv', new THREE.BufferAttribute( uv, 2 ))
    //geometry.computeVertexNormals()
    //const mat = root.materials.wallVirtualColor
    //const mesh = new THREE.Mesh(geometry, mat)


    return { mesh: cont }
}