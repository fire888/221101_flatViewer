export const createMaterials = () => {
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
        window: new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            specular: 0x333333,
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