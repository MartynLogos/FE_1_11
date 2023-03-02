// let obj1 = {};

// let obj2 = new Object();

// const person = {
//     username: 'Ivan',
//     age: 25,
//     isDeveloper: true,
//     showInfo: function() {
//         console.log(`Name: ${this.username}, age: ${this.age}, isDeveloper: ${this.isDeveloper}`);
//     }
// }

// // console.log(person.username);
// // console.log(person.age);
// // console.log(person.isDeveloper);

// person.showInfo();

// person.username = 'Petro';

// person.showInfo();

// const a = 5;
// a = 10;

// const user = {
//     name: 'Ivan'
// }

// console.log(user);
// user.name = 'Petro'
// console.log(user);

// user = { age: 25 };

// console.log(user);

// Object.deleteProperty()


// const user = {
//     name: 'Ivan'
// }

// console.log(user);
// console.log(user.age);

// user.age = 25;

// console.log(user);

// const obj1 = { name: 'Ivan' };
// const obj2 = obj1;

// console.log(obj1.name); // Ivan
// console.log(obj2.name); // Ivan

// obj2.name = 'Petro';

// console.log(obj1.name); // Petro
// console.log(obj2.name); // Ivan

// let a = 5;

// const obj1 = { name: 'Ivan' };
// const obj2 = { ...obj1 };

// console.log(obj1);
// console.log(obj2);

// obj1.name = 'Petro';

// console.log(obj1.name); // Petro
// console.log(obj2.name); // Ivan



// const columnConfiguration = { name: 'Ivan', age: 25, fields: ["RAM", "Memory", "CPU", "GPU"] };

// console.log(Object.assign({}, { ...obj1 }));
// let a = Object.create({ name: 'Petro' });
// console.log(Object.entries(obj1));
// console.log(Object.freeze(obj1));

// obj1.name = 'Petro'
// console.log(obj1);

// console.log(Object.fromEntries([["name", "Olena"], ["age", "33"]]));
// console.log(Object.freeze(obj1));
// console.log(Object.isFrozen(obj1));
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

// console.log(Object.entries(obj1));


// columnConfiguration.name
// columnConfiguration.age

// let a = 15;

// let b = a;

// const fields = columnConfiguration.fields;
// const name = columnConfiguration.name;
// const age = columnConfiguration.age;

// if(fields.includes("RAM") || fields.includes("GPU") || fields.includes("CPU")) {

// }


// const { name, age, fields } = columnConfiguration;

// console.log(name);
// console.log(age);
// console.log(fields);


// const user = {
//     username: 'Ivan',
//     userAge: 25,
//     isDeveloper: true
// };

// // console.log(user.username);

// function showInfo(person) {
//     // const { username, userAge, isDeveloper } = person;
//     const name = person.username;

//     console.log(name);

//     // console.log(username);
//     // console.log(userAge);
//     // console.log(isDeveloper);
// }

// showInfo(user);

// let a = 5;

// a = 'Petya';


// const user = {
//     username: 'Ivan',
//     userAge: 25,
//     isDeveloper: true,
//     'E-Mail': '1@mail.com',
//     null: function greeting() {console.log('hello')}
// };

// console.log(user.username);
// console.log(user["username"]);

// console.log(user.username);
// console.log(user["userAge"]);

// console.log(Object.keys(user));

// all values from user using for


// const phoneFilters = {
//     GPU: ['i3', 'i5', 'i7', 'i9'],
//     CPU: ['1650', '1650Ti', '2060', '3070'],
//     matrix: ['4gb', '8gb', '16gb', '32gb'],
//     RAM: ['IPS', 'TN']
// }

// const computerFilters = {
//     CPU: ['i3', 'i5', 'i7', 'i9'],
//     GPU: ['1650', '1650Ti', '2060', '3070'],
//     RAM: ['4gb', '8gb', '16gb', '32gb'],
//     matrix: ['IPS', 'TN']
// }

// // const filters = Object.keys(computerFilters);
// const filters = ['GPU', 'matrix'];

// for(let i = 0; i < filters.length; i++) {
//     let key = filters[i];
//     console.log(computerFilters[key]);
//     console.log(phoneFilters[key]);

// }




const user = {
    username: 'Ivan',
    userAge: 25,
    isDeveloper: true,
    'E-Mail': '1@mail.com',
    // 'null': 'exception',
    null: function greeting() {console.log('hello')},
    NaN: 'Not a Number'
};

// let key = prompt('enter your key');

// console.log(user[key * 5]);




function extendUser(object, key, value) {
    return {
        [key]: value,
        ...object
    }
}

let newUser = extendUser(user, 'title', 'FE');

console.log(user);
console.log(newUser);

