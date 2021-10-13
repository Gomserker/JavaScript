//입장료
let ticket = 10000;
let age = 11;
//할인
//나이가 10살이 넘으면 1000원, 안 넘으면 3000원 할인

let discount = age > 10 ? '1000' : '3000';

//총금액
let total = ticket - discount;
console.log(total)

//js에선 변수 타입이 동적으로 결정된다. 따라서 위의 경우처럼 String이더라도 연산이 가능하다.

//같다 == or ===

let stringNum = "10";
let numberNum = 10;

//타입 안따지는 비교 연산자
console.log(stringNum == numberNum)
console.log(stringNum != numberNum)

//타입까지 따지는 비교 연산자(String은 String이다. int는 int다 전부 본다는 소리)
console.log(stringNum === numberNum)
console.log(stringNum !== numberNum)

console.log('----------------------------')
//object

let me1 = {name : 'Mr.Lee', age : 30}; // 객체
let me2 = {name : 'Mr.Lee', age : 30};
let me3 = me1;

console.log(me1 == me2)
console.log(me1 === me2)

console.log(me1 == me3)
console.log(me1 === me3)

console.log('----------------------------------')

console.log(0 == false)
console.log(0 === false)
console.log(null == undefined)
console.log(null === undefined)
console.log("" == false)
console.log("" === false)