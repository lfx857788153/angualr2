
let descriptor = {
    type: 'accessor',
    enumerable: true,
    configurable: true
}

class Person {
    @nonenumerable
    get kidCount() {
        return 10;
    }
}

// 禁止枚举
function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
}

var person = new Person();

for (let prop in person) {
    console.log(prop);
}