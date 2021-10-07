// 자바 스크립트의 기본 자료형
/*
자바 스크립트의 기본 자료형은 숫자와 문자.
하지만 Java와는 다르게 JS에서는 정수와 실수의 구분, 문자와 문자열의 구분이 없다.
''를 사용하든 ""를 사용하든 상관 없지만, 반드시 통일되어 있어야 한다.
*/

/*
JS에서는 console.log();를 통해 콘솔에 메세지를 출력할 수 있다.
Java에서의 System.out.print();와 동일한 기능을 한다.
*/
console.log("knowledge");
console.log(13245)

/*
크롬 또는 브라우저에서 개발자 환경을 통해 콘솔에 출력되는 메세지를 확인할 수 있다.
*/

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);

/*
const(상수,constance) java의 final 자료형→ 말이 상수지 무려 텍스트도 받아서 콘솔에 출력할 수 있다.
var(변수, variable) 오래전에 사용되던 것.
let(변수)
*/
const a = 5;
const b = 2;
const myName1 = "gom";
console.log('-----------------------');
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log("hello " + myName1)

/*
JS에서는 let을 사용할 수도 있다. 하지만, const를 사용하면 값을 외부에서 변경할 수 없다.
*/

let a1 = 5;
let b1 = 2;
let myName = "gom";
console.log('-----------------------');
console.log(a1 + b1);
console.log(a1 * b1);
console.log(a1 / b1);
console.log(a1 % b1);
console.log("hello " + myName)
console.log('-----------------------');
myName = "gomserker";
console.log("my new name is " + myName)

/*
let으로 설정한 변수는 위와 같이 변경할 수 있다. myName을 const라고 설정하면 에러가 터진다.
const는 상수이기 때문에 값을 업데이트할 수 없기 때문이다.
때문에 절대로 업데이트 되어서는 안되는 변수는 const로 선언하고, 업데이트를 하고 싶은 변수가 있을때 let으로 선언한다.
var의 경우에는 변수가 갖는 규칙을 확인할 수 없고, 다른 기능적인 측면에서도 디메리트가 있기에 사용하지 않도록 한다.
*/