// extends 通过扩展来实现继承
class Person{
    _name;
    _age;
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    talk(content){
        console.log(content);
    }
}

class Student extends Person{
    // 子类自己的属性，在父类中不存在
    _sex;
    _sno;
    constructor(name, age, sex, sno){
        // 调用父类的构造函数
        super(name, age);
        // 再去初始化子类自有属性
        this._sex = sex;
        this._sno = sno;
    }
    // 子类自有的方法
    study(){
        console.log('我喜欢javascript');
    }
}

var s = new Student("张三", 20, "男", "001");
s.talk("say hello");