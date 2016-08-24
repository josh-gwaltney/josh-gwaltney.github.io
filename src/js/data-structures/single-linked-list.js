class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data){
        let node = new SingleLinkedListNode(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    find(data){
        let current = this.head;
        let previous = this.head;

        while (current.data !== data){
            current = current.next;
        }

        return current;
    }

    findAt(pos){
        let current = this.head;
        let count = 1;

        if(this.length === 0 || pos < 1 || pos> length){
            throw new Error('Error: Non-existent node in list');
        }

        while(count < pos){
            current = current.next;
        }

        return current;
    }


    remove(data){
        let previous = this.head;
        let current = this.head;
        while(current){
            if(current.data === data){
                if(current === this.head){
                    this.head = this.head.next;
                }
                if(current === this.tail){
                    this.tail = previous;
                }
                previous.next = current.next;
                this.length--;
            } else {
                previous = current;
            }
            current = current.next;
        }

    }

    removeAt(pos){
        let currNode = this.head;
        let count = 0;
        let prevNode = null;
        let nodeToDelete = null;

        if(pos < 0 || pos > this.length){
            throw new Error('Error: Non-existent node in list');
        }

        if(pos === 1){
            this.head = currNode.next;
            this.length--;
            return;
        }

        while (count < pos){
            prevNode = currNode;
            nodeToDelete = currNode.next;
            count++;
        }

        prevNode.next = nodeToDelete.next;
        this.length--;
    }
}
