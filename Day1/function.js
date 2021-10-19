// what is function?
// 반복해서 만들 수 있는 코드 조각
// 프로그래머는 게을러서 최대한 반복되는 코드를 줄이려고 노력한다.

function sayHello(nameOfPerson, age){
    console.log("Hello, my name is " + nameOfPerson + " and I'm " + age + "years old");
}

sayHello("gom", 20);
sayHello("mike", 30);

/* function 함수명(Argument1, Argument2, ...) {
    실행할 문장
}
*/


function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);

}

plus(4, 5);

function divide(firstNumber, secondNumber){
    console.log(firstNumber / secondNumber);
}

divide(80, 20);

console.log('------------------------------------------');

const player = {
    name: "gom",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you");
    }
};


console.log(player.name);
player.sayHello("luke");


console.log('---------------------------------------------');
const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy[0]);
console.log(toBuy);
toBuy.push("sausage");
console.log(toBuy);
toBuy.pop();
console.log(toBuy);

console.log('---------------------------------------------');

const player2 = {
    id: "gomserker",
    job: "warrior",
    level: 23,
};

console.log(player2);
console.log(player2.id);
console.log(player2.level);

player2.level = 30;

console.log(player2.level);

console.log('---------------------------------------------');

function plus(){
    console.log(2 + 2);
}

plus();

console.log('---------------------------------------------');

function plus2(firstNum, secondNum){
    console.log(firstNum + secondNum);
}

plus2(10, 27);

console.log('---------------------------------------------');

const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    multiple: function(a, b){
        console.log(a * b);
    },
    power: function(a, b){
        console.log(a ** b);
    }
};


calculator.add(12, 13);
calculator.minus(13, 12);
calculator.divide(14, 2);
calculator.multiple(3, 3);
calculator.power(2, 10);