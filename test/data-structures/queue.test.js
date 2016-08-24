describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
        queue.enqueue(1);
    });

    it('Enqueue an element', () => {
        queue.length().should.equal(1);
    });

    it('Dequeue an element', () => {
        queue.dequeue();
        queue.length().should.equal(0);
    });

    it('Dequeue the first element added', () => {
        queue.enqueue(2);
        let data = queue.dequeue();
        queue.length().should.equal(1);
        data.should.equal(1);
    });

    it('Peek for elements', () => {
        queue.peek().should.equal(true);
    });
});