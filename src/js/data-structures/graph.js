class Graph {
    constructor(){
        this.vertices = [];
        this.edges = [];
        this.numberOfEdges = 0;
    }

    addVertex(v){
        this.vertices.push(v);
        this.edges[v] = [];
    }

    removeVertex(v){

    }

    addEdge(v1, v2){
        this.addEdge2(v1,v2);
        this.addEdge2(v2,v1);
        this.numberOfEdges++;
    }

    addEdge2(v1, v2){
        let idx = this.edges[v1].indexOf(v2);
        if(idx === -1){
            this.edges[v1].push(v2);
        }
    }

    removeEdge(v1, v2){

    }

    findPath(v1, v2){
        let queue = new Queue();
        queue.enqueue(v1);
        let visited = [];
        visited[v1] = true;
        let paths = [];

        while(queue.peek()){
            let vertex = queue.dequeue();
            for(let idx = 0; idx < this.edges[vertex].length; idx++){
                if(!visited[this.edges[vertex][idx]]){
                    visited[this.edges[vertex][idx]] = true;
                    queue.enqueue(this.edges[vertex][idx]);

                    paths[this.edges[vertex][idx]] = vertex;
                }
            }
        }

        if(!visited[v2]){
            return undefined;
        }

        let path = [];
        for(var idx = v2; idx !== v1; idx = paths[idx]){
            path.push(idx);
        }
        path.push(idx);
        return path.reverse().join('-');
    }

    print(){
        console.log(this.vertices.map(function(vertex) {
            return (`${vertex} -> ${this.edges[vertex].join(', ')}`).trim();
        }, this).join(' | '));
    }
}