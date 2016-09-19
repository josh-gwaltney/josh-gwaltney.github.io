class Grid {
    constructor(h, w){
        this.height = h;
        this.width = w;
        this.cells = [];
        this._init();
    }

    _init(){
        for(let idx = 0; idx < this.width; idx++){
            this.cells[idx] = [];
            for(let jdx = 0; jdx < this.height; jdx++){
                let cell = new Cell(idx, jdx);
                this.cells[idx][jdx] = cell;
            }
        }

        for(let idx = 0; idx < 1000; idx++){
            let x = random(0, this.width - 1);
            let y = random(0, this.height - 1);
            let cell = this.cells[x][y];
            cell.on = true;
        }
    }

    update(){
        let newCells = [];
        for(let idx = 0; idx < this.width; idx++) {
            newCells[idx] = [];
            for (let jdx = 0; jdx < this.height; jdx++) {
                let cell = this.cells[idx][jdx];
                let newCell = new Cell(idx, jdx);
                let count = this.getNeighbors(cell);
                if(count < 2){
                    newCell.on = false;
                }
                if(count === 2 || count === 3){
                    newCell.on = true;
                }
                if(count > 3){
                    newCell.on = false;
                }
                newCells[idx][jdx] = newCell;
            }
        }
        this.cells = newCells;
    }

    getNeighbors(cell){
        let dirs = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
        let neighbors = [];
        for(let idx = 0; idx < dirs.length; idx++){
            let dir = dirs[idx];
            let x = cell.x - dir[0];
            let y = cell.y - dir[1];
            if((x >= 0) && (y >= 0) && (x < this.width) && (y < this.height)){
                neighbors.push(this.cells[x][y])
            }
        }

        let count = 0;
        for(let idx = 0; idx < neighbors.length; idx ++){
            if(neighbors[idx].on){
                count++;
            }
        }
        return count;
    }


    render(ctx){
        for(let idx = 0; idx < this.width; idx++) {
            for (let jdx = 0; jdx < this.height; jdx++) {
                let cell = this.cells[idx][jdx];
                cell.render(ctx);
            }
        }
    }
}
