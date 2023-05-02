// 1. lexical environment, closure, Module, encapsulation, polymorphism

// import { getBalance, sellBread } from "./shop.js";
import * as shop from './shop.js'

// globalLexicalEnvironment - window
// function greeting(username) {
//     // LexicalEnvironment: { username: 'Ivan' }
//     const message = `Hello ${username}`;
//     // LexicalEnvironment: { username: 'Ivan', message: 'Hello Ivan' }
//     return message;
//     // LexicalEnvironment: {}
// }

// console.log(greeting('Ivan'));

// console.log(message);

// let counter = 0;

// function count() {
//     counter++;
//     console.log(counter);
// }

// function count() {
//     let counter = 0;
//     counter++;
//     console.log(counter);
// }


// count();
// count();
// count();
// count();
// count();

// function sum(a, b) {//2, 3
//     const c = a + b;
//     return c;

//     // return a + b;
// }

// const result = sum(2, 3);

// console.log(result);

// let counter = 0;

// function count() {
//     console.log('outer function was called');
//     let counter = 0;


//     // const innerFn = function() {
//     //     console.log('inner function was called');
//     //     counter++;
//     //     console.log(counter);
//     // }

//     // return innerFn;

//     return () => {
//         console.log('inner function was called');
//         counter++;
//         console.log(counter);
//     }
// }

// // console.log(innerFn);

// const outerFn = count();


// outerFn();
// outerFn();
// outerFn();
// outerFn();
// outerFn();



// IIFE - immediate invoke function expression

// (function(){
//     let a = 5;
//     a++;
//     console.log(a);
// }());

// const User = (function(){
//     let name = 'Ivan';

//     function getName() {
//         return name;
//     }

//     function setName(value) {
//         name = value;
//     }

//     return {
//         getName,
//         setName
//     }
// }())

// console.log(User);

// console.log(User.getName());
// console.log(User.name = 'Petro');
// console.log(User.getName());
// console.log(User.setName('Alex'));
// console.log(User.getName());



// const CoffeeMachine = (function(){
//     let coffee = 100;
//     let water = 100;
//     let milk = 100;
//     let trash = 0;

//     function checkCoffee() {
//         if(coffee > 5) {
//             coffee -= 5;
//             return true;
//         }
//         console.log('Error, please renew Coffee in machine.');
//         return false;
//     }
//     function checkWater() {
//         if(water > 5) {
//             water -= 5;
//             return true;
//         }
//         console.log('Error, please renew Water in machine.');
//         return false;
//     }
//     function checkMilk() {
//         if(milk > 5) {
//             milk -= 5;
//             return true;
//         }
//         console.log('Error, please renew Milk in machine.');
//         return false;
//     }
//     function checkTrash() {
//         if(trash < 95) {
//             trash += 5;
//             return true;
//         }
//         console.log('Error, please throw trash off.');
//         return false;
//     }

//     function createCoffee() {
//         if(checkCoffee() && checkWater() && checkMilk() && checkTrash()) {
//             console.log('coffee created');
//             return;
//         }
        
//         throw new Error('Some Error occurred');
//     }

//     return {
//         createCoffee
//     }    
// }());

// console.log(CoffeeMachine);

// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();
// CoffeeMachine.createCoffee();


// const Shop = (function(){
//     let balance = 1000;
//     let breadCount = 100;
//     let breadPrice = 25;

//     // checkBalance, checkBreadCount, sellBread

//     function getBalance() {
//         return balance;
//     }

//     function checkBreadCount(n) {
//         if(breadCount > n) {
//             breadCount -= n;
//             return true;
//         }

//         console.log('Shop doesn"t have enough bread');
//         return false;
//     }

//     function sellBread(n) {
//         if(checkBreadCount(n)) {
//             balance += n * breadPrice;
//             console.log(`You bought ${n} bread`);
//             return;
//         }

//         throw new Error('Error occurred');
//     }

//     return {
//         getBalance, 
//         sellBread
//     }
// }());

// console.log(Shop);
// console.log(Shop.getBalance());
// Shop.sellBread(10);
// console.log(Shop.getBalance());
// Shop.sellBread(100);



// different file

// console.log(getBalance());
// sellBread(10);
// console.log(getBalance());
// sellBread(100);
// console.log(getBalance());

// console.log(shop);
// console.log(shop.getBalance());
// shop.sellBread(15);
// console.log(shop.getBalance());
// shop.sellBread(150);


class Shape {

    calculateArea() {
        return 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return this.base * this.height / 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class RandomShape extends Shape {
    constructor() {
        super();
    }
}

const circle = new Circle(10);
const triangle = new Triangle(10, 5);
const rectangle = new Rectangle(10, 5);

console.log(circle.calculateArea());
console.log(triangle.calculateArea());
console.log(rectangle.calculateArea());

const randomShape = new RandomShape();
console.log(randomShape.calculateArea());
