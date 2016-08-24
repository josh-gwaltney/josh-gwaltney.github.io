class CPU {

    constructor() {

        // r0 - r7: low registers
        // r8 - r12: high registers
        // r13: stack pointer
        // r14: link pointer
        // r15: program counter
        // CPSR: status register
        // SPSR: saved program status register

        // normal r0-r15 registers
        this.registers = new Int32Array(16);
        this.heap = [];


    }

    execute(s){
        let c = s.split('\r\n');

        for(let l of c) {
            let ops = l.split(' ');
            let stack = new Stack();

            for (let o of ops) {
                if (!isNaN(o)) {
                    stack.push(parseInt(o));
                    continue;
                }

                let n;

                switch (o) {
                    case 'add':
                        stack.push(stack.pop() + stack.pop());
                        break;
                    case 'sub':
                        n = stack.pop();
                        stack.push(stack.pop() - n);
                        break;
                    case 'mul':
                        stack.push(stack.pop() * stack.pop());
                        break;
                    case 'mov':
                        break;
                    case 'sto':
                        break;
                    default:
                        throw new Error('Invalid operation: ' + o);
                        break;
                }
            }
            console.log(stack.pop());
        }

    }

    reset(){

    }
}