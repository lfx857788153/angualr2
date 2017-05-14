function testable(target, isTestable){
    target.isTestable = isTestable;
}

var descriptor = {
    type: 'accessor',
    enumerable: false,
    configurable: true,
    writable: true
}

function ro(target, name, des){
    // descriptor.writable = false;
    return des;
}

@testable(MyTestable, true)
class MyTestable{

    @ro(MyTestable, "name", descriptor)
    name(val){
        console.log(val);
    }
}

console.log(MyTestable.isTestable)

var t = new MyTestable();
t.name('hello');