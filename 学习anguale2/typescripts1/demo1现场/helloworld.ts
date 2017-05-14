// 使用严格模式的javascript语法
"use strict";

console.log("hello world");

// let和var类似，都是创建一个变量
// var声明的变量是在全局域，
// let具有块作用域
let str = "hello";

{
    let count = 10;
}
// console.log(count);

console.log(str);

//  由于node和浏览器对js的高级语法兼容的不好，还没有完全支持，所以说如果要使用typescript这门语法开发的.ts文件，目前需要使用编译器(tsc)把.ts文件转换成.js文件再去使用（保险做法）

// 命令： tsc   .ts文件名1   .ts文件名2
// node helloworld.js
// <script src="helloworld.js"></script>
// 不建议直接使用.ts文件

// 明确标识了title变量在语法上必须是字符串
var title:string = "hello world";
title = "string";
// title = false;
// title = 10;
console.log(title); // 10

// ts-node 文件名 
// 不再生成.js文件