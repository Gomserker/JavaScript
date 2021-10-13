"use strict";

//조건문
let age = 55;
//나이가 50이상이면 안녕하세요 출력

if(age >= 50){
    console.log("안녕하세요");
}


let score = 70;
/*
    80점 이상 - 상
    50점 이상 - 중
    그 이하 - 하

*/

if(age >= 80){
    console.log("상")
} else if (age >= 50){
    console.log("중")
} else {
    console.log("하")
}

//printf
//%s

let a = 6;
let b = "헤헤"

if(a % 2 == 0){
    console.log(a + '는 짝수다 ' + b)
    console.log(`${a}는 짝수다 ${b}`)
}