/**
 * Created by lsq on 2022/4/10.
 */

'use strict';

class Counter {
    constructor(limit) {
        this.count = 1;
        this.limit = limit;
    }

    next() {
        if (this.count < this.limit) {
            return {
                done: false, value: this.count++,
            }
        } else {
            return {
                done: true, value: undefined,
            }
        }
    }

    [Symbol.iterator]() {
        return this;
    }
}

let counter = new Counter(4);

for (let a of counter) {
    console.log(a);
}
