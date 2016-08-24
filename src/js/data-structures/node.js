class Node {
    constructor(data){
        this.data = data;
    }
}

class SingleLinkedListNode extends Node {
    constructor(data){
        super(data);
        this.next = null;
    }
}

class DoubleLinkedListNode extends SingleLinkedListNode {
    constructor(data){
        super(data);
        this.previous = null;
    }
}

class TreeNode extends Node {
    constructor(data){
        super(data);
        this.children = [];
    }
}

class BinaryTreeNode extends Node {
    constructor(data){
        super(data);
        this.left = null;
        this.right = null;
    }
}