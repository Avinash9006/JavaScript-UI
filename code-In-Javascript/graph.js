let rail = "Asr Sv Gkp Pnbe Blr Pune Dl Lko".split(" ");
let routes = [
  ["Asr", "Dl"],
  ["Dl", "Lko"],
  ["Gkp", "Lko"],
  ["Gkp", "Sv"],
  ["Gkp", "Blr"],
  ["Dl", "Pnbe"],
  ["Pune", "Pnbe"],
];

let graph = new Map();

function addNode(node) {
  graph.set(node, []);
}

function addEdge(src, dest) {
  graph.get(dest).push(src);
  graph.get(src).push(dest);
}

rail.forEach(addNode);

routes.forEach((route) => addEdge(...route));
console.log(graph);

function BFS(start, tobereach) {
  const queue = [start];
  const visited = new Set();
  visited.add(start);
  process.stdout.write(start + " -> ");
  while (queue.length > 0) {
    const stn = queue.shift();
    const d = graph.get(stn);
    for (const dest of d) {
      if (dest == tobereach) {
        process.stdout.write(" (found it) ");
      }
      if (!visited.has(dest)) {
        queue.push(dest);
        process.stdout.write(dest + " -> ");
        visited.add(dest);
      }
    }
  }
}
let reached = false;
function DFS(start, tobereach, visited = new Set()) {
  if (graph.size == visited.size) {
    return;
  }
  for (let node of graph.get(start)) {
    if ((node == tobereach)) {
      reached = true;
      process.stdout.write(node)
    }
    if (!visited.has(node) && !reached) {
      process.stdout.write(node + " -> ");
      visited.add(node);
      DFS(node, tobereach, visited);
    }
  }
}
BFS("Sv", "Asr");
console.log(" ");
DFS("Sv", "Asr");
