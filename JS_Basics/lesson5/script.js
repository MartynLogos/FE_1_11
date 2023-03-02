
// let a = +prompt('Please, print a month number(1-12)', '');

// console.log(typeof a);

// if (a > 0 && a <= 2 || a === 12) {
//     console.log('winter');
// } else if (a > 2 && a <= 5) {
//     console.log('spring');
// } else if (a > 5 && a <= 8) {
//     console.log('summer');
// } else if (a > 8 && a <= 11) {
//     console.log('autumn');
// } else {
//     console.log('Error');
// }

// switch (a) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('winter');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('spring');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('summer');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('autumn');
//         break;
//     default:
//         console.log('Error');
// }


// let num = prompt('enter some number', '');

// // console.log(10 > 5);
// // console.log(10 == 5);

// if (num < 0 && num > 20) {  // оператор "і"
//     console.log('great');
// }

// if (num < 0 || num > 20) {  // оператор "або"
//     console.log('great');
// }

// user write a number (1-7). The result should be a day of the week: monday - sunday || Error

// let number = +prompt('enter your day number', 'Number'); // 1 - 7

// switch (number) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default: 
//         console.log('error');
//         break;
// }



/*
    function Declaration
    function Expression
    function Arrow
*/


// Function Declaration

// function greeting() {
//     alert('Hello User !');
// }

// greeting();

// let a = 10;

// console.log(a);

// let b = 2 * a;

// console.log(b);



// function greeting() {
//     alert('Hello User !');
// }

// greeting();



// params
// function greeting(name, age) {   // параметр функції
//     console.log(name);
//     console.log(age);
//     alert(`Hello, my name is ${name}. I am ${age} years old!`);
// }

// greeting('Ivan', 22);
// greeting('Oksana', 33);

// let username = prompt('Enter your name'); // Ivan
// let userAge = prompt('Enter your age');   // 22  

// greeting(username, userAge);


// function greeting(name = 'User') {   // параметр функції
//     alert(`Hello ${name}!`);
// }

// // greeting('Ivan');
// let username = prompt('enter name');
// if(!username) {
//     greeting();
// } else {
//     greeting(username);
// }

// greeting(username || 'User')


// arguments, this
// function showAllNumbers(a, b, c, d) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }

// showAllNumbers(1, 2, 3, 5) [1, 2, 3, 5]

function showAllNumbers() {
    console.log(arguments);
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(arguments[2]);
    // console.log(arguments[3]);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

showAllNumbers(1, 2, 3, 5)
showAllNumbers()
showAllNumbers(1, 2, 3, 5, 10, 20, 40, 100)
