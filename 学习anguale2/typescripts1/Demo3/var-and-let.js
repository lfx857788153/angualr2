var fns = [];
for (var i = 0; i < 5; i++) {
    // 在回调函数执行前，i值已更新成5
    fns.push(function () { console.log(i); });
}
fns.forEach(function (fn) { return fn(); });
console.log('-----------美丽的分割线------------');
var fns = [];
var _loop_1 = function (i_1) {
    fns.push(function () { console.log(i_1); });
};
// let本质是给变量i增加了一个函数作用域
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
fns.forEach(function (fn) { return fn(); });
