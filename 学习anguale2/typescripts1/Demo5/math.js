"use strict";
function square(x) {
    return Math.pow(x, 2);
}
exports.square = square;
function log10(x) {
    return Math.log10(x);
}
exports.log10 = log10;
exports.PI = Math.PI;
// 以上是单个导出
function squareV2(x) {
    return Math.pow(x, 2);
}
exports.squareV2 = squareV2;
function log10V2(x) {
    return Math.log10(x);
}
exports.log10V2 = log10V2;
var PIV2 = Math.PI;
exports.PIV2 = PIV2;
