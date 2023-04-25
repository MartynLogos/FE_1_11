// 1. bind, call, apply
// 2. OOP + __proto__
// 3. class + function Constructor
// 4. example of standard function how does constructor works.
// 5. class via function constructor with inheritance


// 1. bind, call, apply

// const user = {
//     sleep: 'Ivan',
//     lastName: 'Petrenko',
//     age: 25,
//     greeting: function(job, title) {
//         // console.log(this.name);
//         return `full Name: ${this.name} ${this.lastName}. job - ${job}(${title})`
//     }
// }

// const person = {
//     name: 'Mark',
//     lastName: 'Petrenko',
//     age: 33
// }

// user.greeting();

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     user.greeting();
// });

// btn.addEventListener('click', user.greeting.bind(person));


// const sayHello = user.greeting.bind(person);

// // sayHello();
// const fullName = sayHello();

// console.log(fullName);

// const fullName = user.greeting.bind(person)();
// const fullName = user.greeting.call(person, 'FE', 'middle');
// const fullName = user.greeting.apply(person, ['FE', 'middle']);

// console.log(fullName);




// 2. OOP, proto


// const user = {
//     name: 'Ivan',
//     age: 20,
//     eat: true
// }

// const employee = {
//     job: 'FE',
//     title: 'middle',
//     eat: false,
//     __proto__: user
// }

// const employee1 = {
//     job: 'BE',
//     title: 'senior',
//     eat: false,
//     __proto__: user
// }

// employee.__proto__.sleep = function() {
//     console.log('Z-z-z-z');
// }

// employee1.sleep();

// // console.log(user.name);
// // console.log(employee.job);
// // console.log(employee.name);

// // console.log('employee', employee);
// // console.log('employee name', employee.name);
// // console.log('employee eat', employee.eat);
// // console.log('employee sleep', employee.sleep);

// console.log(employee);
// employee.sleep();



// 3. function constructor

// function createAnimal(type, canFly) {
//     const animal = {};
    
//     animal.type = type;
//     animal.canFly = canFly;

//     animal.eat = true;
//     animal.sleep = true;

//     return animal;
// }

// const turtle = createAnimal('turtle', false);
// const parrot = createAnimal('parrot', true);

// console.log(turtle);
// console.log(parrot);



// function Animal(type, canFly) {
//     this.type = type;
//     this.canFly = canFly;

//     // this.showInfo = function() {
//     //     console.log(`Type: ${this.type}, canFly: ${this.canFly}`);
//     // }
// }

// Animal.prototype.showInfo = function() {
//     console.log(`Type: ${this.type}, canFly: ${this.canFly}`);
// }

// const turtle = new Animal('turtle', false);
// const parrot = new Animal('parrot', true);

// console.log(turtle);
// console.log(parrot);

// turtle.showInfo();




function User(name, age) {
    this.name = name;
    this.age = age;

    console.log('created');
}

User.prototype.sleep = function() {
    console.log('...');
}

function Employee(name, age, job, title, company = 'Logos') {
    User.call(this, name, age);
    this.job = job;
    this.title = title;
    this.company = company;
}

Employee.prototype = Object.create(User.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.sleep = function() {
    console.log('Z-z-z-z');
}

const employee = new Employee('Petro', 32, 'FE', 'middle');
console.log(employee);

employee.sleep();
