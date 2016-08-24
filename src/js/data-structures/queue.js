class Queue {
    constructor(){
        this.data = [];
    }

    enqueue(data){
        this.data.push(data);
    }

    dequeue(){
        return this.data.shift();
    }

    length(){
        return this.data.length;
    }

    peek(){
        return this.data.length > 0;
    }
}
