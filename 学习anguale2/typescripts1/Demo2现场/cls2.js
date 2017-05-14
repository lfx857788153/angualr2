var Person2 = (function () {
    // 构造函数
    // constructor方法名,形参写到()里，方法体写到｛｝
    // 在构造函数中通过this去访问属性和方法
    // 构造函数执行的时机？ new Person2()时候去执行构造函数
    // 执行构造函数的目的？ 对一些属性进行初始化
    function Person2(name, age, sex) {
        // static totalCount = 0;
        this.totalCount = 0;
        this.name = name;
        this.age = age;
        this.sex = sex;
        // Person2.totalCount = Person2.totalCount + 1;
        this.totalCount = this.totalCount + 1;
    }
    // 普通的方法 方法名(){ // 方法体 }
    Person2.prototype.move = function (lon) {
        // console.log(this.name + "移动" + lon);
        // `` 称为“字符串模板” 使用“占位符” ${ 变量 }
        // 目的：减少字符串拼接 
        console.log(this.name + "\u79FB\u52A8" + lon);
        // 字符串模板换行，注意：会保留“风格”
        console.log("jfldsjflkdjsfljlkdjksf\nfdjslfjldskjsflkjds\nfdsjlfjdsljfls");
    };
    return Person2;
}());
var p1 = new Person2('张三', 20, true);
console.log(p1.name);
// console.log(Person2.totalCount);
console.log(p1.totalCount); // 1
var p2 = new Person2('李四', 21, false);
// console.log(Person2.totalCount);
console.log(p2.totalCount); // 1
console.log(p1.totalCount); // 1
p2.move(1000);
// 实例属性：每一个“个体”实例属性都有可能变化
// 静态属性：所有的“个体”共用
// 实例属性和静态属性存放的位置不一样
// 实例属性通过实例变量来访问
// 静态属性通过类名来访问
