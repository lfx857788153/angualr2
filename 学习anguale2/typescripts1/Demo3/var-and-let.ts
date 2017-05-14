var fns = [];
for (var i = 0; i < 5; i++) {
    // 在回调函数执行前，i值已更新成5
    fns.push(function () { console.log(i) });
}

fns.forEach(fn => fn());

console.log('-----------美丽的分割线------------');

var fns = [];
// let本质是给变量i增加了一个类似于函数作用域
for (let i = 0; i < 5; i++) {
    fns.push(function () { console.log(i) });
}

fns.forEach(fn => fn());
