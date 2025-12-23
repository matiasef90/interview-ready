// 1. *Route Between Nodes*:

// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

export type GraphNode = {
  value: number;
  neighbors: GraphNode[];
};

export default function hasRouteBetweenNodes(
  start: GraphNode,
  end: GraphNode,
): boolean {
  const queue: Array<GraphNode> = [start]
  let p = queue.shift()
  const set: Set<GraphNode> = new Set()
  while (p) {
    for(let n of p.neighbors) {
      set.add(p)
      if (n === end) { return true }
      if (!set.has(n)) { queue.push(n) }
    }
    p = queue.shift()
  }
  return false
}
