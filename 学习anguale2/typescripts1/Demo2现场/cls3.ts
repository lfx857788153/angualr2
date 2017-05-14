// set,get方法

class Person3{
    // 加下划线的属性，是一种编码风格，告诉开发人员，此属性不建议在外部直接访问
    // 但是在JS里面私有的属性在外部还可以访问的
    // 私有的属性或方法在类的外部提示不能访问
    private _name;
    private _age;

    // 可以通过定义两个特殊方法，专门处理获取属性值和设置属性值
    // get表示获取属性值
    // get关键字 + 方法名（）｛｝
    get name(){
        return this._name;
    }

    // set表示设置属性值
    set name(value){
        this._name = value;
    }

    private talk(content){
        console.log(content);
    }
}

var p3 = new Person3();
// p3._name = "张三";
// console.log(p3._name);

p3.name = "李四";
console.log(p3.name);
//p3.talk(); // 不建议访问，但能访问