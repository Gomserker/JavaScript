"use strict";
//쓰면 좀더 정확히 지적해줌

// let age;
// age = 30;
// console.log(age);

let height;
height = 168;
console.log(height);
console.log('-----------------------------------');
/*
    타입들
    number, string, boolean, null, undefineded
    object, function, ...
*/

//let
// 왜 var 가 아닌 let을 쓰는가? var의 문제점은?


//1. global scope (Hoisting)

var whyDontUse;
whyDontUse = 1111;
console.log(whyDontUse);


console.log('-----------------------------------');
let age = 30;
console.log(age);