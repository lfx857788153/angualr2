// for (var i = 0; i < 5; i++) {
//     function fun(){
//         console.log(i);
//     }
// }

// fun();

// var i;
// var fun;
// for(i = 0; i< 5; i++){
//     function fun(){
//         console.log(i);
//     }
// }
// fun();

for (let i = 0; i < 5; i++) {
    (function fun(){
        console.log(i);
    })();
}

