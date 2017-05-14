var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function testable(target, isTestable) {
    target.isTestable = isTestable;
}
var descriptor = {
    type: 'accessor',
    enumerable: false,
    configurable: true,
    writable: true
};
function ro(target, name, des) {
    // descriptor.writable = false;
    return des;
}
var MyTestable = MyTestable_1 = (function () {
    function MyTestable() {
    }
    MyTestable.prototype.name = function (val) {
        console.log(val);
    };
    return MyTestable;
}());
__decorate([
    ro(MyTestable_1, "name", descriptor)
], MyTestable.prototype, "name");
MyTestable = MyTestable_1 = __decorate([
    testable(MyTestable_1, true)
], MyTestable);
console.log(MyTestable.isTestable);
var t = new MyTestable();
t.name('hello');
var MyTestable_1;
