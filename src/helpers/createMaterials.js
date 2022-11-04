export const createMaterials = () => {
    const materials = {
        room: new THREE.MeshPhongMaterial({
            color: 0xadadbb,
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
            color: 0xdddddd,
            side: THREE.DoubleSide,
            specular: 0x333333,
            ///vertexColors: true,
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