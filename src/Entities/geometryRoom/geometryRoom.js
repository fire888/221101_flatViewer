export const createRoom = (data, mat) => {

    console.log(data)

    const { path } = data

    const v = []
    for (let i = 0; i < path.length; ++i) {
        const t1 = path[i]
        const t2 = path[i + 1] || path[0]
        v.push( 
           t1[0], 0, t1[1],
           t2[0], 0, t2[1],
           t2[0], 2500, t2[1],
           
           t1[0], 0, t1[1],
           t2[0], 2500, t2[1],
           t1[0], 2500, t1[1],
        )
    }


    const v32 = new Float32Array(v)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(v32, 3))

    const m = new THREE.Mesh(geometry, mat)


        /** mesh main */
    //const geometry = new THREE.BufferGeometry()
    //geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    //geometry.setAttribute('color', new THREE.BufferAttribute( colors, 3 ))
    //uv && geometry.setAttribute('uv', new THREE.BufferAttribute( uv, 2 ))
    geometry.computeVertexNormals()
    //const mat = root.materials.wallVirtualColor
    //const mesh = new THREE.Mesh(geometry, mat)

    return m
}