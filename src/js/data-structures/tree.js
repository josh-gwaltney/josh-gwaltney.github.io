class Tree {
    constructor(){
        this.root = null;
    }

    add(data, nodeData){
        let node = new TreeNode(data);
        let parent = nodeData ? this.findBreadthFirstSearch(nodeData) : null;

        if(parent){
            parent.children.push(node);
        } else {
            if(!this.root){
                this.root = node;
            } else {
                throw new Error('Error: Invalid node assignment');
            }
        }
    }

    remove(data){
        if(this.root.data === data){
            this.root = null;
        }

        let queue = [this.root];
        while(queue.length){
            let node = queue.shift();
            for(let idx = 0; idx < node.children.length; idx++){
                if(node.children[idx].data === data){
                    node.children.splice(idx, 1);
                } else {
                    queue.push(node.children[idx]);
                }
            }
        }
    }

    findBreadthFirstSearch(data){
        let queue = [this.root];
        while(queue.length){
            let node = queue.shift();
            if(node.data === data){
                return node;
            }
            for(let idx = 0; idx < node.children.length; idx++){
                queue.push(node.children[idx]);
            }
        }
        return null;
    }

    contains(data){
        return this.findBreadthFirstSearch(data) ? true : false;
    }
}
