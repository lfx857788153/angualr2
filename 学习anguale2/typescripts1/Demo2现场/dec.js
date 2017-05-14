var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function testable(target) {
    target.isTestable = true;
}
function logClass(target) {
    console.log("\u6211\u5728" + new Date() + "\u8BBF\u95EE\u4E86" + target);
}
var MyTestableClass = (function () {
    function MyTestableClass() {
    }
    return MyTestableClass;
}());
MyTestableClass = __decorate([
    logClass,
    testable,
    noDec // 这个装饰器不存在
], MyTestableClass);
console.log(MyTestableClass.isTestable);
// 装饰器（注解），通过一些元数据去修改类，给类增加更多的功能（这些功能一般情况下是和类主业务逻辑不太相关）
// 装饰器是一种设计思想（模式）是es7的一种实验性的功能。
