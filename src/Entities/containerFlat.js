import * as THREE from 'three'
import dataRooms from '../data/sample-room.json'
import { createSchemeFlat } from '../helpers/schemeFlat'
import { createMaterials } from '../helpers/createMaterials'
import { createWindow } from './meshesFlat/createWindow'
import { createDoor } from './meshesFlat/createDoor'
import { createWall } from './meshesFlat/createWall'
import { createFloor } from './meshesFlat/createFloor'


const creaters = {
    'window': createWindow,
    'door': createDoor,
    'wall': createWall,
    'floor': createFloor,
}


export const  createContainerFlat = (root) => {
    const materials = createMaterials()

    const cont = new THREE.Object3D() 
    cont.scale.set(0.01, 0.01, 0.01)


    const scheme = createSchemeFlat(dataRooms)


    for (let i = 0; i < scheme.windows.length; ++i) {
        const mesh = createWindow(scheme.windows[i], materials)
        cont.add(mesh)
    }
    for (let i = 0; i < scheme.doors.length; ++i) {
        const mesh = createDoor(scheme.doors[i], materials.door)
        cont.add(mesh)
    }
    for (let i = 0; i < scheme.floors.length; ++i) {
        const mesh = createFloor(scheme.floors[i], materials.room)
        cont.add(mesh)
    }
    for (let i = 0; i < scheme.walls.length; ++i) {
        const mesh = createWall(scheme.walls[i], materials.room)
        cont.add(mesh)
    }
    //for (let i = 0; i < scheme['outer-perimeter'][0].length; ++i) {
    //    const r = scheme['outer-perimeter'][0][i]
    //    const d = createWall(r, materials.wall)
    //    cont.add(d)
    //}
    // for (let i = 0; i < scheme['inner-perimeters'][0].length; ++i) {
    //     const r = scheme['inner-perimeters'][0][i]
    //     const d = createWall(r, materials.wall)
    //     cont.add(d)
    // }


    return { mesh: cont }
}