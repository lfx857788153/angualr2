// 给类增加强类型支持

// var str:string = "";

class Animal {
    private _name: string;
    private _kind: string;
    constructor(name: string, _kind: string) {
        this._name = name;
        this._kind = name;
    }

    // 第一个number是代表形参的类型，第二个number代表方法的返回值类型

    // 访问修饰符  名称（形参:形参类型）: 返回值的类型{}
    public jump(len: number): number {
        console.log(len);

        return len;
    }

}

var a = new Animal("老虎", "我是吃肉的");
var len = a.jump(2);
console.log(len);