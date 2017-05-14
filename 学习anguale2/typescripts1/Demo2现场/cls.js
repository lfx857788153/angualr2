// 声明类的方式，通过class+类名，用｛｝包括起来
// 类理解成一种类型，和string，boolean一样，只是这种类型比较复杂，我们称为复合类型
var Person = (function () {
    function Person() {
        // 定义一个属性，人的名称
        this.name = "张三";
        this.age = 20;
        this.sex = true; // true表示“男”
    }
    return Person;
}());
// 实例化一个类
var p = new Person();
console.log(p.name); // p.name获取name
p.name = "李四"; // 设置name
console.log(p.name);
// 如何使用类
// 1. 创建一类
// 2. 实例化一个类
// 3. 调用类中的属性或方法 
