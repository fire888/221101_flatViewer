export const createRoom = (data, mat) => {

    console.log(data)

    const { path } = data

    const v = []
    const c = []
    for (let i = 0; i < path.length - 1; ++i) {
        const offsetZ = Math.random() * 100
        const offsetX = Math.random() * 100

        const t1 = path[i]
        const t2 = path[i + 1] || path[0]
        v.push( 
           t1[0] + offsetX, 0, t1[1] + offsetZ,
           t2[0] + offsetX, 0, t2[1] + offsetZ,
           t2[0] + offsetX, 2500, t2[1] + offsetZ,
           
           t1[0] + offsetX, 0, t1[1] + offsetZ,
           t2[0] + offsetX, 2500, t2[1] + offsetZ,
           t1[0] + offsetX, 2500, t1[1] + offsetZ,
        )

        const col = [Math.random(), Math.random(), Math.random()]
        c.push(
            ...col,
            ...col,
            ...col,
            ...col,
            ...col,
            ...col,
        )
    }


    const v32 = new Float32Array(v)
    const c32 = new Float32Array(c)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(v32, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(c32, 3))

    const m = new THREE.Mesh(geometry, mat)


    //uv && geometry.setAttribute('uv', new THREE.BufferAttribute( uv, 2 ))
    geometry.computeVertexNormals()

    return m
}