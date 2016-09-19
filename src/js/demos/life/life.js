class Life {
    constructor(){
        this.el = document.getElementById('screen');
        this.height = this.el.clientHeight;
        this.width = this.el.clientWidth;
        this.context = null;
        this.last = null;
        this.running = false;
        this._init();
    }

    _init(){
        let h = this.height / 10;
        let w = this.width / 10;
        this.grid = new Grid(h, w);
        this.start();
    }

    timestamp(){
        return performance && performance.now ? performance.now() : new Date().getTime();
    };

    start(){
        this.last = this.timestamp();
        this.running = true;
        this.tick();
    }

    tick(){
        let now = this.timestamp();
        let dt = Math.min(1, (now - this.last) / 1000);
        this.update(dt);
        this.render(dt);
        this.last = now;
        if(this.running) {
            window.requestAnimationFrame(() => this.tick());
        }
    }

    render(delta){
        this.context.clearRect(0, 0, this.el.width, this.el.height);
        this.grid.render(this.context);
    }

    update(delta){
        let height = this.el.clientHeight;
        let width = this.el.clientWidth;
        this.el.height = this.height;
        this.el.width = this.width;
        this.grid.update();
        this.context = this.el.getContext('2d');
    }
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}