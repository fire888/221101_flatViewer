

export const createMaterials = (assets) => {
    const materials = {
        room: new THREE.MeshPhongMaterial({
            color: 0xdddddd,
            side: THREE.DoubleSide,
            specular: 0x333333,
            //vertexColors: true,
        }),
        wall: new THREE.MeshPhongMaterial({
            color: 0x999999,
            side: THREE.DoubleSide,
            specular: 0x333333,
            //vertexColors: true,
        }),
        window: new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            specular: 0x333333,
            aoMap: assets.w_ao_map,
            aoMapIntensity: 1,
            ///vertexColors: true,
        }),
        lineG1: new THREE.LineBasicMaterial({
            color: 0x888866,
        }),
        windowGlass: new THREE.MeshPhongMaterial({
            color: 0x00ffff,
            side: THREE.DoubleSide,
            specular: 0xffffff,
            shininess: 100,
            opacity: .2,
            transparent: true,
            emissive: 0x28caff,
            ///vertexColors: true,
        }),
        door: new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            specular: 0x333333,
            ///vertexColors: true,
        }),
    }

    return materials
}