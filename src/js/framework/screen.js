class Screen {
    constructor(id){
        //this.el = document.getElementById(id);
        //this.height = this.el.height;
        //this.width = this.el.width;
        //this.context = null;
        this.sprite = {
            x: 10,
            y: 10
        }
        this.canvas = document.getElementById(id);
        //this.context = null;
        this.context = this.canvas.getContext('2d');
        this.height = this.canvas.height;
        this.width = this.canvas.width;
    }

    update(){
        //this.height = this.el.height;
        //this.width = this.el.width;
        //this.context = this.el.getContext('2d');
        this.sprite.x += 10;
        this.sprite.y += 10;
        this.height = this.canvas.clientHeight;
        this.width = this.canvas.clientWidth;
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        //this.context = this.canvas.getContext('2d');
    }

    render(){
        //console.log('w: ' + this.width + ' h: ' + this.height);
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = '#FF0000';
        this.context.rect(this.sprite.x, this.sprite.y, 10, 10);
        this.context.fill()
    }
}
