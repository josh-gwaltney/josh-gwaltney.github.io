class Cell extends Point2D{
    constructor(x, y){
        super(x, y);
        this.on = false;
    }

    update(){
        this.on = !this.on;
    }

    render(ctx){
        if(this.on){
            ctx.fillStyle = '#FF0000';
            let x = this.x * 10 + 1;
            let y = this.y * 10 + 1;
            ctx.rect(x, y, 8, 8);
            ctx.fill();
        }
    }
}