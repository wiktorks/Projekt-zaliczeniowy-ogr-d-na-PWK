class Graph {
    constructor () {
        this.nodes = [];
        this.edges = [];
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges.push([]);
    }

    addEdge(from, to, distanceVector) {
        this.edges[from].push({
            destIndex: to,
            x: distanceVector.x,
            y: distanceVector.y
        });
    }

    drawNode(node) {
        switch(this.nodes[node]) {
            case 'tree':
                drawTree(0, 0, 25);
                break;
            case 'flower':
                drawPlants(0, 0, 30, 'purple');
                break;
            case 'stone':
                drawStone(0, 0, 75);
                break;
            case 'road':
                for(let edge of this.edges[node]) {
                    if(this.nodes[edge.destIndex] === 'road') {
                        drawRoad(0, 0, edge.x, edge.y, 15);
                    }
                }
                break;
        }
        for(let edge of this.edges[node]) {
            ctx.save();
            ctx.translate(edge.x, edge.y);
            this.drawNode(edge.destIndex);
            ctx.restore();
        }
    }

    drawGarden(x, y) {
        ctx.save();
        ctx.translate(x, y);
        this.drawNode(0);
        ctx.restore();
    }
}