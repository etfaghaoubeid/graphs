class Graph {
    constructor() {
        this.adjacencyList={}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return this.adjacencyList[vertex] = []
        }
         
    }
    removeVertex(vertexOne) {
        if(!this.adjacencyList[vertexOne])return 
        [...this.adjacencyList[vertexOne]].map(el => {
            
           return this.adjacencyList[el]= [...this.adjacencyList[el]].filter(v=>v !==vertexOne)
        })
        delete this.adjacencyList[vertexOne]

        

        
    }
    addEdge(vertexOne, vertexTwo) {
        // console.log(r)
        this.adjacencyList[vertexOne] = [...this.adjacencyList[vertexOne], vertexTwo]
        this.adjacencyList[vertexTwo] = [...this.adjacencyList[vertexTwo],vertexOne];
        
    }
    removeEdge(vertexOne, vertexTwo) {
        [...this.adjacencyList[vertexOne]].map(el => {
            return [...this.adjacencyList[el]].filter(v => v !== vertexTwo)
        });
        [...this.adjacencyList[vertexTwo]].map(el => {
           return  [...this.adjacencyList[el]].filter(v=>v!==vertexOne)
        })
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
g.addEdge("C", "E");


// g.addEdge("D","B")
// g.addEdge("D", "C");
g.addEdge("D", "E")

console.log(g.adjacencyList)


g.removeVertex("C")

 
console.log(g.adjacencyList)



console.log("before removing Edge")
console.log(g.adjacencyList)
g.removeEdge("A", "B");
console.log("after removing Edge")
console.log(g.adjacencyList)

