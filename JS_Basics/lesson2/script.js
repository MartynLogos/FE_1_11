
// operators, conditions, operations


// let a = 5;
// let b = 10;

// let c = 10 + 5;

// console.log(c);
// console.log(a + b);
// console.log(b - a);
// console.log(b * a);
// console.log(b / a);
// console.log(b ** a);
// console.log(16 % 2);


// let a = prompt('Enter first number');
// let b = prompt('Enter second number');

// console.log('result: ', typeof a);
// console.log('result: ', typeof b);

// console.log('result: ', a - b);
// console.log('result: ', a * b);
// console.log('result: ', a / b);
// console.log('result: ', a + b);

// let a = prompt('Enter first number');
// let b = prompt('Enter second number');

// let c = parseInt('5.99999999999');
// let c = parseInt(prompt('enter a number'));


// let c = Number(prompt('Enter first number'));

// let c = +prompt('Enter first number');

// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(typeof c);


// 2. logical operations

// let a = +prompt('Enter first number');
// let b = prompt('Enter second number');

// console.log('>', a > b);
// console.log('<', a < b);
// console.log('==', a == b);   // НЕ строга рівність(можна порівнювати стрічки і числа 5 == "5" => true)
// console.log('>=', a >= b);
// console.log('<=', a <= b);
// console.log('===', a === b); // трога рівність(НЕ можна порівнювати стрічки і числа 5 === "5" => false)

// console.log('!=', a != b);   // НЕ строга НЕрівність
// console.log('!==', a !== b); // строга НЕрівність

// let c = false;

// console.log('c:', !c);


// let a = prompt('Enter first number');
// let b = prompt('Enter second number');

// console.log(a == b);
// console.log(a > b);
// console.log(a < b);


// conditionals


// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');

// if(a > b) {
//     console.log('first number is bigger than second');
// } else if(a < b) {
//     console.log('second number is bigger than first');
// } else {
//     console.log('numbers are equal');
// }


// Вводимо 1 число. перевірити чи воно більше за 0


// let a = +prompt('Enter first number');

// if(a > 0) {
//     console.log('positive');
// } else if(a < 0) {
//     console.log('negative');
// } else if(a == 0) {
//     console.log('zero');
// } else {
//     console.log('It is not a number');
// }

// if(a > 0) {
//     console.log('positive');
// } else if(a > 10) {
//     console.log('is bigger than 10');
// }


// if(a > 0) {
//     console.log('positive');
//     if(a > 10) {
//         console.log('is bigger than 10');
//         // ...
//     }

// } else {
//     console.log('negative');
// }


// let letter = prompt('enter some letter');

// if(letter == 'a') {
//     console.log('first letter of alphabet');
// } else if(letter == 'b') {
//     console.log('second letter of alphabet');
// }



// У вас є секретне слово. Вивести чи користувач його вгадав


// let word = 'secret';
// let letter = prompt('guess secret word');

// // console.log(letter);
// // console.log(Number(letter));

// if(Number.isNaN(Number(letter))) {
//     if(letter == word) {
//         console.log('good');
//     } else {
//         console.log('bad');
//     }
// } else {
//     console.log('password can not be a number');
// }


// Задаємо користувачеві питання.
// Користувач відповідає на питання.
// Перевіряємо чи вгадав.


// let guess = prompt('2 + 2?');

// if(guess == '4') {
//     console.log('you are right');
// } else {
//     console.log('you are wrong');
// }

// let mark = 0;

// let question1 = '1';
// let question2 = '2';
// let question3 = '3';
// let question4 = '4';
// let question5 = '5';

// let answer1 = prompt('guess');
// let answer2 = prompt('guess');
// let answer3 = prompt('guess');
// let answer4 = prompt('guess');
// let answer5 = prompt('guess');

// if(question1 == answer1) {
//     // mark = mark + 1;    //  mark++
//     mark++;
// }

// console.log('result:', mark);

// let h = 5;
// console.log(h);

// h++;
// console.log(h);

// h--;
// console.log(h);

let a = 10;

// a = a + 10; // a += 10; += -= *= /=
a -= 10;

console.log(a);
