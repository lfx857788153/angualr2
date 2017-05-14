// set,get方法
var Person3 = (function () {
    function Person3() {
    }
    Object.defineProperty(Person3.prototype, "name", {
        // 可以通过定义两个特殊方法，专门处理获取属性值和设置属性值
        // get表示获取属性值
        // get关键字 + 方法名（）｛｝
        get: function () {
            return this._name;
        },
        // set表示设置属性值
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Person3.prototype.talk = function (content) {
        console.log(content);
    };
    return Person3;
}());
var p3 = new Person3();
// p3._name = "张三";
// console.log(p3._name);
p3.name = "李四";
console.log(p3.name);
//p3.talk(); // 不建议访问，但能访问 
