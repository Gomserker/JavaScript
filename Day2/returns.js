const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    times: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }
}


const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

// calculator.plus(10, 20);
// calculator.minus(10, 20);
// calculator.times(10, 20);
// calculator.divide(10, 20);
// calculator.power(10, 3);

/* data를 받아서 콘솔이 아닌 화면에 출력하거나 전송받아서 활용하려고 한다.
console.log는 콘솔에 출력하는 명령어이기 때문에 활용하는 것이라고는 볼 수 없다.
alert는 브라우저 경고문으로 보는 것, 
두 명령어 모두 브라우저에서 그냥 일어나기만 하고 그걸로 끝난다.
 */
console.log('------------------------------------------')
const age = 96;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);