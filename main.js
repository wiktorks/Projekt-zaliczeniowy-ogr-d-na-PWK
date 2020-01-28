let graph = new Graph();

graph.addNode('road'); // 0
graph.addNode('road'); // 1
graph.addNode('road'); // 2

graph.addNode('tree'); // 3
graph.addNode('tree'); // 4
graph.addNode('tree'); // 5
graph.addNode('tree'); // 6

graph.addEdge(0, 3, {x: 20, y: 50});
graph.addEdge(0, 1, {x: 100, y: 0});
graph.addEdge(1, 4, {x: 0, y: 50});
graph.addEdge(1, 2, {x: 60, y: 0});
graph.addEdge(0, 5, {x: 20, y: -50});
graph.addEdge(1, 6, {x: 0, y: -50});

graph.addNode('road'); // 7
graph.addNode('road'); // 8
graph.addNode('road'); // 9
graph.addNode('road'); // 10
graph.addNode('road'); // 11

graph.addEdge(2, 7, {x: 0, y: -150});
graph.addEdge(7, 8, {x: 300, y: 0});
graph.addEdge(8, 9, {x: 0, y: 300});
graph.addEdge(9, 10, {x: -300, y: 0});
graph.addEdge(10, 11, {x: 0, y: -150});

graph.addNode('flower'); // 12
graph.addNode('flower'); // 13
graph.addNode('flower'); // 14
graph.addNode('flower'); // 15
graph.addNode('flower'); // 16
graph.addNode('flower'); // 17
graph.addNode('flower'); // 18
graph.addNode('flower'); // 19
graph.addNode('stone'); // 20

graph.addEdge(2, 12, {x: 50, y: 0});
graph.addEdge(12, 13, {x: 0, y: -100});
graph.addEdge(13, 14, {x: 100, y: 0});
graph.addEdge(14, 15, {x: 100, y: 0});
graph.addEdge(15, 16, {x: 0, y: 100});
graph.addEdge(16, 17, {x: 0, y: 100});
graph.addEdge(17, 18, {x: -100, y: 0});
graph.addEdge(18, 19, {x: -100, y: 0});
graph.addEdge(14, 20, {x: 0, y: 100});

graph.drawGarden(0, 300);