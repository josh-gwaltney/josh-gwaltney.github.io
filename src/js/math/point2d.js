class Point2D {
    constructor(x, y){

        if((x === undefined) || (x === null)){
            throw new Error('Error: X cannot be null');
        }

        if ((y === undefined) || (y === null)){
            throw new Error('Error: Y cannot be null');
        }

        if (typeof x !== 'number'){
            throw new Error('Error: X must be a number');
        }

        if (typeof y !== 'number'){
            throw new Error('Error: Y must be a number');
        }

        this.x = x;
        this.y = y;
    }

    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
}
