var Person2 = (function () {
    // 构造函数
    // constructor方法名,形参写到()里，方法体写到｛｝
    // 在构造函数中通过this去访问属性和方法
    // 构造函数执行的时机？ new Person2()时候去执行构造函数
    // 执行构造函数的目的？ 对一些属性进行初始化
    function Person2(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        Person2.totalCount = Person2.totalCount + 1;
    }
    return Person2;
}());
var p1 = new Person2('张三', 20, true);
console.log(p1.name);
console.log(Person2.totalCount);
