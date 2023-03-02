// "use strict";
// alert("Hello everyone !")

// оголошення змінних - var, let, const
// data types - 8 types
// modal windows - 3 windows


// var a = 5;
// a = 50;

// alert(a); // 50

// let b = 10;
// b = 100

// alert(b); // 100

// const ERROR_MESSAGE = 20;
// const c = 20;
// // c = 200; // error

// alert(N);

// let appliedFilters;
// let getDataFromStorageViaGetMethod;


// a = 5;
// alert(a); // 5
// var a = 10;
// alert(a); // 10

// a = 5;
// alert(a); // 5
// let a = 10;
// alert(a); // 10


// alert(a); // undefined
// var a = 10;
// alert(a); // 10




// data types

// let x1 = 5;
// console.log(typeof x1);
// let x2 = 'hello'; // "", '', ``
// console.log(typeof x2);
// let x3 = true;  // false
// console.log(typeof x3);
// let x4;
// console.log(x4);
// let x5 = null;
// console.log(x5);
// let x6 = {};
// console.log(typeof x6);
// let user = { username: "Alex" , age: 33, email: "alex@gmail.com" };
// console.log(user);
// console.log(user.username);

// let x7 = Symbol('world');
// console.log(x7);
// console.log(typeof x7);
// let x8 = 1n;
// console.log(typeof x8);
// console.log(Number.MAX_SAFE_INTEGER);

// let x9 = -5/15;
// console.log(x9);



// 1. name, age, password, email - змінну на кожне значення
// 2. {} ключ - значення ключа, як змінна
// 3. вивести об'єкт в консоль

// let a,b,c,d;
// a = 5;

// let username = 'Alex';
// let userAge = 25;
// let password = 'qwertyuiop';
// let email = '1@mail.com';

// let user = { name: username, age: userAge };
// console.log(user);

// user.name = 'Max';
// console.log(user);


// alert('hello world');

// let username;
// console.log(username);
// username = prompt('Hello, what is your name?', '');
// console.log("Hello, ", username, "!");
// alert("Hello, " + username + "!");

// confirm("Site is using cookies, are you ok with that? :)");
// Записати значення конфірм у змінну і вивести її

let answer = confirm("Site is using cookies, are you ok with that? :)");
console.log(answer);
