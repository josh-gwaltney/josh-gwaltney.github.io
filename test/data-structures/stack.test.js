describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
        stack.push(1);
    });

    it('Push an element', () => {
        stack.length().should.equal(1);
    });

    it('Pop an element', () => {
        let data = stack.pop();
        stack.length().should.equal(0);
        data.should.equal(1);
    });

    it('Pops the last element added', () => {
        stack.push(2);
        let data = stack.pop();
        stack.length().should.equal(1);
        data.should.equal(2);
    });
});