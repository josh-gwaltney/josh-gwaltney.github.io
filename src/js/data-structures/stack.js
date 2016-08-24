class Stack{
    constructor(){
        this.data = [];
    }

    length(){
        return this.data.length;
    }

    push(data){
        this.data.push(data);
    }

    pop(){
        return this.data.pop();
    }
}
