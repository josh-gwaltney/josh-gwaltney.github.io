class Screen {
    constructor(el){
        this.wrapper = document.getElementById(el + '-wrapper');
        this.canvas = document.getElementById(el);
        this.context = null;
        this.height = null;
        this.width = null;
    }

    update(){
        this.height = this.wrapper.clientHeight;
        this.width = this.wrapper.clientWidth;
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.context = this.canvas.getContext('2d');
    }

    render(){
        this.context.clearRect(0, 0, this.width, this.height);
    }
}
