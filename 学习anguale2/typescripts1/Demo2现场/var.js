// for (var i = 0; i < 5; i++) {
//     function fun(){
//         console.log(i);
//     }
// }
var _loop_1 = function (i) {
    (function fun() {
        console.log(i);
    })();
};
// fun();
// var i;
// var fun;
// for(i = 0; i< 5; i++){
//     function fun(){
//         console.log(i);
//     }
// }
// fun();
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
