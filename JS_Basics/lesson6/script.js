// function sum() {
//     console.log(2 + 5);
// }

// sum();

// function sum(x, y) {
//     console.log(x + y);
//     console.log(a + b);
// }

// let a = 7;  //  prompt
// let b = 2;

// sum(7, 2);
// sum(a, b);


// function sum(a, b) {
//     console.log('calculating');
//     // a + b
//     return a + b;
// }

// let a = 5;
// let b = 7;

// let result = sum(a, b); // 12

// console.log(result);

// let fruit = prompt('enter some fruit', 'banana');

// let num = prompt('enter some number', '15');
// let numb = +num;



/*
    function declaration - function name(){}
    function expression
    arrow function
*/
// fn();

// function fn() {
//     console.log('hello, function declaration');
// }


// const fn = function(){
//     console.log('hello, function expression');
// }

// fn();


// let fun1 = fn;

// fun1();

// function greet(){
//     console.log('hello');
// }

// let person = {
//     username: 'Ivan',
//     age: 23,
//     isDeveloper: true,
//     // greeting: function() {
//     //     console.log('hello');
//     // }
//     greeting: greet
// }

// console.log(person.age);
// person.greeting();


// const sum = function(x, y) {
//     return x + y;
// }

// const sum2 = (a, b) => {
//     console.log('hello');
//     return a + b;
// }

// let res = sum2(5, 15);
// console.log(res);



// const sum3 = (a, b) => a + b;

// const plusFive = a => a + 5;

// console.log(plusFive(10));

// let num = 45;
// let user = { username: 'Petro' };

// let person = {
//     username: 'Ivan',
//     age: num,
//     isDeveloper: true,

//     greeting: function() {
//         console.log(this);
//         console.log(`Hello, my name is ${person.username}`);
//         console.log(`Hello, my name is ${user.username}`);
//         console.log(`Hello, my name is ${this.username}`);
//     },
//     greet: () => {
//         console.log(this);
//     }
// }

// person.greeting();
// person.greet();
// window.person.greeting();
// let a = 10;

// function fn() {
//     console.log(a + 6);
// }

// fn()

// window.alert();
// alert();

// let user = {};

// let person = {
//     username: 'Ivan',
//     age: 25,
//     isDeveloper: true,
//     abilities: {
//         greet: () => {
//             console.log(this);
//         }
//     }
// }

// person.abilities.greet();

// let name = prompt('enter name');

// console.log(`Hello ${alert}`);



// let a = +prompt('enter some number', '10'); //  10 => 1 * 2 * 3 * 4 .. * 10 || 10 * 9 * 8 ... * 1;
// let result = 1;

// for(let i = a; i > 0; i--) {
//     result *= i;
// }


// 10! = 9! * 10
// 9! = 8! * 9;
// 8! = 7! * 8;
// ...
// 1! = 1;

// function abc(n) { //10
//     if(n == 1) {
//         return 1;
//     }

//     return n + abc(n - 1);// 3 * 2!
// }

// let num = +prompt('enter number for factorial');
// let result = abc(num);

// console.log(result);

// function sum(a, b) {
//     return a + b;
// }

// let res = sum(2, 3);

// 10 = 10 + 9 + 8 + 7...




// let month = +prompt('enter number');

// if(month == 1 || month == 2 || month == 12) {
//     console.log('winter');
// } else if(month > 2 && month < 6) {
//     console.log('spring');
// }

// switch(month) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('winter');
//         break;
//     case 3:
//     case 4:
//     case 4:
//         console.log('spring');
//         break;
//     case 1:
//     case 2:
//     case 12:
//         console.log('winter');
//         break;
//     case 1:
//     case 2:
//     case 12:
//         console.log('winter');
//         break;
//     default:
//         console.log('error');
//         break;
// }


let a = prompt();
let b = prompt();

let command = prompt('Enter "+" for sum function; Enter "-" for minus'); 
let result;

switch(command) {
    case "+":
        result = sum(a, b)
        break;
    case "-":
        minus(a, b)
        break;
    case "*":
        multi(a, b)
        break;
    case "/":
        divide(a, b)
        break;
}


function sum(x, y) {
    console.log(x + y);
}



function max() {
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

max(10,20,40,100,0,-500);
max(10,20,-500);
max(10, 40, 300,-200);


