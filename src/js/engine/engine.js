class Engine {
    constructor(){
        this.last = null;
        this.running = false;
        this.screen = new Screen('screen');
        this.square = {
            x: 10,
            y: 10
        }
    }

    timestamp(){
        return performance && performance.now ? performance.now() : new Date().getTime();
    };

    tick(){
        let now = this.timestamp();
        let dt = Math.min(1, (now - this.last) / 1000);
        this.update(dt);
        this.render(dt);
        if(this.running) {
            requestAnimationFrame(() => this.tick());
        }
        //cancelAnimationFrame(this.tick());
    }

    update(dt){
        this.screen.update();
        //this.square.x += 10;
        //this.square.y += 10;
    }

    render(dt){
        this.screen.render();
        //let ctx = this.screen.context;
        //ctx.fillStyle = '#FF0000';
        //ctx.rect(this.square.x, this.square.y, 10, 10);
        //ctx.fill();
    }

    start(){
        this.last = this.timestamp();
        this.running = true;
        this.tick();
    };

    stop(){
        this.running = false;
        this.tick();
    };
}