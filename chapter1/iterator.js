class Counter {
    constructor(limit) {
        this.limit = limit;
    }

    // 迭代器工厂函数，返回一个新迭代器
    [Symbol.iterator]() {
        let count = 1, limit = this.limit;
        return {// 使用闭包，支持可迭代对象创建多个迭代器
            next() {
                if (count < limit) {
                    return {// 迭代器对象
                        done: false, value: count++,
                    }
                } else {
                    return {
                        done: true, value: undefined,
                    }
                }
            }
        };
    }
}

let counter = new Counter(4);

for (let a of counter) {
    console.log(a);
}

for (let a of counter) {
    console.log(a);
}
