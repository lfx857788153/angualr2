var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this._name = name;
        Person.total += 1;
    }
    Object.defineProperty(Person.prototype, "name", {
        // get方法
        get: function () {
            return this._name;
        },
        // set方法
        set: function (val) {
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.talk = function () {
        // this.name访问的是__proto__上的name属性方法，即get name()方法
        // return `Hi, I'm ${this.name}`;
        // this._name访问的是实例属性
        return "Hi, I'm " + this._name;
    };
    return Person;
}());
// 静态属性，直接通过类名访问
Person.total = 0;
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(name, languages) {
        var _this = 
        // 继承父类的构造函数实现
        _super.call(this, name) || this;
        _this._languages = languages;
        return _this;
    }
    Object.defineProperty(Developer.prototype, "languages", {
        get: function () {
            return this._languages;
        },
        enumerable: true,
        configurable: true
    });
    Developer.prototype.talk = function () {
        // 通过super调用父类的talk()方法
        return _super.prototype.talk.call(this) + " And I know " + this.languages.join(',') + "...";
    };
    return Developer;
}(Person));
var zhangsha = new Person('张三');
console.log(zhangsha.talk());
var lishi = new Developer('李四', ['JavaScript', 'TypeScript']);
console.log(lishi.talk());
