function testable(target){
    target.isTestable = true;
}

function logClass(target){
    console.log(`我在${ new Date() }访问了${ target }`);
}

@logClass
@testable
@noDec // 这个装饰器不存在
class MyTestableClass{
    
}

console.log(MyTestableClass.isTestable);

// 装饰器（注解），通过一些元数据去修改类，给类增加更多的功能（这些功能一般情况下是和类主业务逻辑不太相关）
// 装饰器是一种设计思想（模式）是es7的一种实验性的功能。

