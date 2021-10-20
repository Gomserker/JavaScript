// const age = prompt("how old are you?");


/*
신기하긴한데 이런 prompt function은 요즘 아무도 안쓴답니다.
요즘엔 html이랑 css로 자기가 만들고 싶은 창을 만들어서 쓰지요.
*/



// console.log(typeof age);


// console.log(typeof "15", typeof parseInt("15"));

// console.log('--------------------------------------');
// console.log(age, parseInt(age));

/* 
자료의 형태를 확인하려면 typeof 변수명을 입력
그나저나 여기서 분명 숫자를 입력했는데 string으로 나온다?
문자열을 숫자로 바꾸는 작업이 필요함. 바로 parseInt()
*/

const age = parseInt( prompt("How old are you?"));


if (isNaN(age)){
    console.log("please input number");
} else if(age < 19){
    console.log("you are too young");
}  else if ( age >40){
    console.log("you are too old");
} else {
    console.log("you're good to go");
}


