class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data){
        let node = new DoubleLinkedListNode(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        this.length++;
    }

    remove(data){
        let current = this.head;
        while(current){
            if(current.data === data){
                if(current === this.head && current === this.tail){
                    this.head = null;
                    this.tail = null;
                }
                else if(current === this.head){
                    this.head = this.head.next;
                    this.head.previous = null;
                }
                else if(current === this.tail){
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
                this.length--;
            }
            current = current.next;
        }

    }
}