class Graph {
    constructor() {
        this.adjacencyList={}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return this.adjacencyList[vertex] = []
        }
         
    }
    addEdge(vertexOne, vertexTwo) {
        console.log(this.adjacencyList[vertexTwo])
        this.adjacencyList[vertexOne] =  this.adjacencyList[vertexOne].push(vertexTwo);
        this.adjacencyList[vertexTwo] =  this.adjacencyList[vertexTwo].push(vertexOne);
        
    }
    removeEdge(vertexOne, vertexTwo) {
        if (this.adjacencyList[vertexOne]) {
           this.adjacencyList[vertexOne] =this.adjacencyList[vertex].filter(vertex=>vertex!==vertexTwo)
        }
    }
    removeVertex(vertexOne) {
        let arr = this.adjacencyList[vertexOne]
        arr.map(el => {
            return this.adjacencyList[el].filter(v=>v !==vertexone)
        })
        delete this.adjacencyList[vertexOne]

        while (this.adjacencyList[vertex].lenght) {
            
        }

        
    }
   
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");



g.addEdge("A", "B")
g.addEdge("A", "C")

// g.addEdge("B", "A")
g.addEdge("B", "C");
g.addEdge("B", "D")

// g.addEdge("C", "B")
g.addEdge("C", "D");


// g.addEdge("D","B")
// g.addEdge("D", "C");
g.addEdge("D", "E")


 
console.log(g)