class Engine {
    constructor(){
        this.last = null;
        this.running = false;
        this.screen = new Screen('screen');
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
    }

    render(dt){

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
