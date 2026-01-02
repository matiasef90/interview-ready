// 2. *Robot in a Grid*:

// Imagine a robot sitting on the upper left corner of a grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain cells are
// "off limits" such that the robot cannot step on them.
// Design an algorithm to find a path for the robot from the top left to the bottom right.

type Grid = boolean[][];
type Position = [number, number]
type Path = Array<Position>;

export default function robotInAGrid(grid: Grid): Path | false {
    const path = move([0,0], grid)
    const lastPosition = path[path.length - 1] 
    if (grid.length - 1 === lastPosition[1] && grid[0].length - 1 === lastPosition[0]) {
        return path
    }
    return false
}


function move(p: Position, g: Grid, path: Path = []): Path {
    if (g.length === 1 && g[0].length === 0) return []
    const [x, y] = p
    const maxX = g[0].length - 1    
    const maxY = g.length - 1
    if (maxX < x || maxY < y) return path
    if (x === maxX && y === maxY) {
        return [...path, [maxX, maxY]]
    } 
    if (!g[y][x]) return path
    const paths = [
        move([x+1,y], g, [...path, [x,y]]),
        move([x,y+1], g, [...path, [x,y]])
    ].sort((a, b) => b.length - a.length)
    return paths[0]
}