// 给类增加强类型支持
// var str:string = "";
var Animal = (function () {
    function Animal(name, _kind) {
        this._name = name;
        this._kind = name;
    }
    // 第一个number是代表形参的类型，第二个number代表方法的返回值类型
    // 访问修饰符  名称（形参:形参类型）: 返回值的类型{}
    Animal.prototype.jump = function (len) {
        console.log(len);
        return len;
    };
    return Animal;
}());
var a = new Animal("老虎", "我是吃肉的");
var len = a.jump(2);
console.log(len);
