class Registry {
    constructor() {
        this.dependencies = {};
    }

    register(nm, fn) {
        if (this.dependencies[nm] === undefined) {
            this.dependencies[nm] = fn;
        }
    }

    resolve(nm) {
        var fn = this.dependencies[nm];
        var FN_ARGS = /^class|function\s*[^\(]*\(\s*([^\)]*)\)/m;

        var text = fn.toString();
        if (text.match(FN_ARGS)[1] !== '') {
            var deps = [];
            var args = text.match(FN_ARGS)[1].split(', ');
            for (var idx = 0; idx < args.length; idx++) {
                deps.push(this.resolve(args[idx]));
            }
            return new fn(...deps);
        } else {
            return new fn();
        }
    }
}