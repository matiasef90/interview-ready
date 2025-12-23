// 7. *Build Order*:

// You are given a list of projects and a list of dependencies
// (which is a list of pairs of projects, where the second project is
// dependent on the first project). All of a project's dependencies
// must be built before the project is. Find a build order that will allow
// the projects to be built. If there is no valid build order, return an error.

// ```
// EXAMPLE Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: e, f, a, b, d, c
// ```

export default function buildOrder(projects: string[], dependencies: string[][]): string[] | string {
    if (projects.length === 0) return []

    const map: Map<string, Set<string>> = new Map()
    for (let p of projects) {
        map.set(p, new Set())
    }
    for (let [dependOf, project] of dependencies) {
        const pDeps = map.get(project)
        pDeps?.add(dependOf)
    }
    const finished = []
    console.log(map)
    while(finished.length < projects.length) {
        const toAdd = []
        for (const[_, d] of map) {
            for (let f of finished) {
                d.delete(f)
            }
        }
        for (const [p, d] of map) {
            if (!d.size && finished.indexOf(p) === -1) {
                toAdd.push(p)
            }
        }
        // console.log(toAdd, finished)
        if (toAdd.length === 0) {
            console.log('entra al if pero no tira el error')
            throw new Error("No valid build order exists");
            // return []
            
        }
        finished.push(...toAdd)
    }

    return finished

}
