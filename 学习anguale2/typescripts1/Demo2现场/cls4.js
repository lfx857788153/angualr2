var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// extends 通过扩展来实现继承
var Person = (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Person.prototype.talk = function (content) {
        console.log(content);
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, age, sex, sno) {
        var _this = 
        // 调用父类的构造函数
        _super.call(this, name, age) || this;
        // 再去初始化子类自有属性
        _this._sex = sex;
        _this._sno = sno;
        return _this;
    }
    // 子类自有的方法
    Student.prototype.study = function () {
        console.log('我喜欢javascript');
    };
    return Student;
}(Person));
var s = new Student("张三", 20, "男", "001");
s.talk("say hello");
