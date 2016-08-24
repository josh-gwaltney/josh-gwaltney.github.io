describe('Point2D', () => {

    describe('Create a new point', () => {
        let point = new Point2D(1, 1);

        it('should have x and y coordinates', () =>{
           chai.expect(point.x).to.equal(1);
           chai.expect(point.y).to.equal(1);
        });
    });

    describe('Missing x coordinate', () => {

        let point = () => {
            new Point2D();
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: X cannot be null');
        });

    });

    describe('Missing y coordinate', () => {

        let point = () => {
            new Point2D(1);
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: Y cannot be null');
        });

    });

    describe('X coordinate not a number', () => {

        let point = () => {
            new Point2D('a', 1);
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: X must be a number');
        });

    });

    describe('Y coordinate not a number', () => {

        let point = () => {
            new Point2D(1, 'a');
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: Y must be a number');
        });

    });

});
