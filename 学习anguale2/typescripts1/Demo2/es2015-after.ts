// 声明一个类，用关键字class, 后加类名
// 类中可以包含属性和方法（理解一种特殊的属性）
class Person {
    // 静态属性，直接通过类名访问
    static total = 0;
    // 实例属性
    _name;
    constructor(name) {
        this._name = name;
        Person.total += 1;
    }
    // get方法
    get name() {
        return this._name;
    }
    // set方法
    set name(val) {
        this._name = val;
    }
    talk() {
        // this.name访问的是__proto__上的name属性方法，即get name()方法
        // return `Hi, I'm ${this.name}`;
        // this._name访问的是实例属性
        return `Hi, I'm ${this._name}`;
    }
}

class Developer extends Person {
    _languages;
    constructor(name, languages){
        // 继承父类的构造函数实现
        super(name);
        this._languages = languages;
    }
    get languages(){
        return this._languages;
    }
    talk(){
        // 通过super调用父类的talk()方法
        return `${super.talk()} And I know ${this.languages.join(',')}...`;
    }

}

var zhangsha = new Person('张三');
console.log(zhangsha.talk());

var lishi = new Developer('李四', ['JavaScript', 'TypeScript'])
console.log(lishi.languages)
console.log(lishi.talk());