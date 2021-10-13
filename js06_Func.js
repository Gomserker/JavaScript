"use strict";

//java로 치면 method
function call(){
    console.log('Gom')
    console.log(30)
}

function guguTwo(){
    let dan = 2;
    for(let i=1; i<10; i++){
        console.log(`${dan} x ${i} = ${dan*i}`)
    }
}

//숫자를 2개 집어넣으면 합을 출력해주는 함수
//js에서는 동적으로 자료형이 정해지기 때문에 파라미터에 자료형을 명시할 필요가 없다.
function add(a, b){
    console.log(a+b)
}

//입력한 숫자의 단을 출력해주는 함수
function printGugudan(x){
    for(let i=1; i<10; i++){
        console.log(`${x} x ${i} = ${x*i}`)
    }
}

function printGugudan2(){
    let myInput = document.myForm.i1;
    let myValue = myInput.value;
    // alert(myValue);

    for(let i=1; i<10; i++){
        console.log(`${myValue} x ${i} = ${myValue*i}`)
    }

    myInput.value=""
    myInput.focus()
    return false;
}

function printGugudan3(){
    let myInput = document.getElementById('i2');
    let myValue = myInput.value
    alert(myValue);

    for(let i=1; i<10; i++){
        console.log(`${myValue} x ${i} = ${myValue*i}`)
    }

    myInput.value=""
    myInput.focus()
    
}