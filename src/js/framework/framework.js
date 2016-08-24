class Framework {

    constructor(){
        this.registry = null;
    }

    module(name, fn) {
        if (fn === undefined) {
            fn = this.registry.resolve(name);
            return fn;
        } else {
            this.registry.register(name, fn);
        }
    }
}