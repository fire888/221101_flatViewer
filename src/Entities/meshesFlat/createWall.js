export const createWall = (data, mat) => {
    //console.log('wall', data)

    const v = []
    const c = []

    const h1 = data.h0
    const h2 = data.h1

    const c1 = data.path[0]
    const c2 = data.path[1]

    v.push(
        c1[0], h1, c1[1],
        c2[0], h1, c2[1],
        c2[0], h2, c2[1],

        c1[0], h1, c1[1],
        c2[0], h2, c2[1],
        c1[0], h2, c1[1],
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


    const v32 = new Float32Array(v)
    const c32 = new Float32Array(c)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(v32, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(c32, 3))

    const m = new THREE.Mesh(geometry, mat)


    /** mesh main */
    geometry.computeVertexNormals()


    return m
}