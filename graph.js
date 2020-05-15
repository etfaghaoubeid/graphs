class Graph {
    constructor() {
        this.adjacencyList={}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return this.adjacencyList[vertex] = []
        }
         
    }
    removeVertex(vertex) {
        
    }
    addEdge(vertex, edge) {
        this.adjacencyList[vertex]=edge
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", ["B","C"])
 
console.log(g)