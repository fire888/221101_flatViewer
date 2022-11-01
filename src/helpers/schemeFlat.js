export const createSchemeFlat = (data) => {
    const d = {
        windows: [],
        doors: [],
        floors: [],
        walls: [],
        wallsOuter: [],
    }

    let height = 3000

    for (let i = 0; i < data['objects'][0].length; ++i) {
        const ob = data['objects'][0][i]
        if (ob.class === 'window' || ob.class === 'door') {
            let w
            {
                const x1 = ob.location[0].path[0][0]
                const x2 = ob.location[0].path[1][0]

                const z1 = ob.location[0].path[0][1]
                const z2 = ob.location[0].path[1][1]

                const dx = Math.abs(x1 - x2) 
                const dz = Math.abs(z1 - z2) 

                w = Math.sqrt(dx * dx + dz * dz)
            }
            let t
            {
                const x1 = ob.location[0].path[0][0]
                const x2 = ob.location[1].path[0][0]

                const z1 = ob.location[0].path[0][1]
                const z2 = ob.location[1].path[0][1]

                const dx = Math.abs(x1 - x2) 
                const dz = Math.abs(z1 - z2) 

                t = Math.sqrt(dx * dx + dz * dz)
            }








            const props = {
                class: ob.class,
                id: ob.id,
                h0: ob.parameters[0]['height-bottom'],
                h1: ob.parameters[0]['height-top'],
                p1: ob.location[0].path[0],
                p2: ob.location[0].path[1],
                refWall_p1_p2: ob.location[0]['ref-wall'],
                p3: ob.location[1].path[0],
                p4: ob.location[1].path[1],
                refWall_p3_p4: ob.location[1]['ref-wall'],
                w,
                t,
            }
            
            if (ob.class === "window") {
                d.windows.push(props)
            }
            if (ob.class === "door") {
                d.doors.push(props)
            }
        }
    }

    /** floors */
    for (let i = 0; i < data.rooms[0].length; ++i) {
        const ob = data.rooms[0][i]
        if (ob.parameters[0].height) {
            height = ob.parameters[0].height
        }
        const props = {
            class: ob.class,
            id: ob.id,
            path: ob.path,
            h: height,
        }
        d.floors.push(props)
    }


    /** walls inner */
    for (let i = 0; i < data['inner-perimeters'][0].length; ++i) {
        const ob = data['inner-perimeters'][0][i]
        const props = {
            ...ob,
            h0: 0,
            h1: height,
        }

        let isInsert = true 
        for (let i = 0; i < d.windows.length; ++i) {
            if (
                d.windows[i].refWall_p1_p2 === props.id ||
                d.windows[i].refWall_p3_p4 === props.id
            ) {
                props.h1 = d.windows[i].h0
                props.tag = 'underWindow' 

                d.walls.push(props)
                
                const copy = {...props}
                copy.h0 = d.windows[i].h1
                copy.tag = 'overWindow'
                copy.h1 = height

                d.walls.push(copy)

                isInsert = false
            } 
        }

        for (let i = 0; i < d.doors.length; ++i) {
            if (
                d.doors[i].refWall_p1_p2 === props.id ||
                d.doors[i].refWall_p3_p4 === props.id
            ) {
                props.h0 = d.doors[i].h1
                props.h1 = height
                props.tag = 'overDoor' 

                d.walls.push(props)
                isInsert = false
            } 
        }

        if (isInsert) {
            d.walls.push(props) 
        }
    }

    console.log(d)

    return d
}