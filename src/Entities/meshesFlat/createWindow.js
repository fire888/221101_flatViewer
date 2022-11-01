import { createFace4 } from '../../helpers/geomHelper'


export const createWindow = (data, mat) => {
    console.log('!!! window', data)

    const v = []
    const c = []

    const wR = 100

    const h1 = data.h0
    const h2 = data.h1

    const c1 = data.p1
    const c2 = data.p2
    const c3 = data.p3
    const c4 = data.p4

    v.push(
        ...createFace4(
            [c1[0], h1, c1[1]],
            [c2[0], h1, c2[1]],
            [c2[0] - wR, h1 + wR, c2[1] - wR],
            [c1[0] - wR, h1 + wR, c1[1] - wR],
        )
    )

    const col = [Math.random(), Math.random(), Math.random()]
    c.push(

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