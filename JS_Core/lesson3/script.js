// Number, Array


// #1 Number

// let num = 5;
// let numb = new Number(5);

// console.log(num);
// console.log(numb);

// console.log(Number.EPSILON);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.isFinite(Number.MAX_SAFE_INTEGER));
// console.log(Number.isInteger(15));
// console.log(Number.isSafeInteger(Math.pow(2,53) - 1));
// console.log(Number.parseFloat('5.25'));
// console.log(Math.random());
// console.log(Math.round(Math.random()*350));

// let i = Math.random() > 0.5 ? 1 : -1;
// console.log(Math.round(Math.random() * 350) * i);
// console.log(Math.round(Math.random() * 330) + 20);



// #2. Array

// let array = [];

// console.log(array);



// let nums = [1, 2, 3, 4, 5];
// let strings = ['h', 'e', 'l', 'l', 'o'];

// console.log(nums);
// console.log(strings);

// let user = {
//     username: 'Ivan',
//     age: 25,
//     isDeveloper: true
// };

// let users = [
//     {
//         username: 'Ivan',
//         age: 25,
//         isDeveloper: true
//     },
//     {
//         username: 'Max',
//         age: 35,
//         isDeveloper: false
//     },
// ];

// console.log(users);

// let data = ['hello', 1, {}, false, 1n, Symbol('green'), null, NaN, undefined];

// console.log(data);



let numbers = [10,-45, 20, 30, - 100, 40, 50, -200];
// let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// console.log(numbers.concat([60, 70, 80]));

// let newNums = [...numbers, 60, 70, 80]; // [[10, 20, 30, 40, 50], 60, 70, 80]
// console.log(newNums);

// console.log(numbers.entries());

// numbers.push(15);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.unshift(300);


// console.log(numbers);
// console.log(numbers.slice(2,4));
// console.log(numbers);
// console.log(numbers.splice(2, 1));
// console.log(numbers);
// [].splice


// console.log(numbers.reverse());    // TODO: compare with string methods

// console.log(numbers.keys());
// console.log(numbers.join('-'));


// let str = 'hello'; // => olleh

// console.log(str)
// console.log(str.split(''));
// console.log(str.split('').reverse());
// console.log(str.split('').reverse().join(''));

// function filterLogic() {

// }

// const filterLogic = (number) => {
//     console.log(number);
//     return number > 0;
// }

// console.log(numbers.filter(filterLogic));
// const newNums = numbers.filter(number => number < 0);

// console.log(newNums);
// console.log(numbers);



// const powNums = numbers.map(number => number ** 2);
// console.log(powNums);
// console.log(numbers);


// const num = numbers.find(number => number > 2);
// console.log(num);

// console.log(numbers.fill(5, 1, 3));
// console.log(numbers);

// fill, map, filter, find

// let nums = [];

// console.log(numbers.map(number => number ** 2));

// numbers.forEach((number, index) => {
//     nums.push({ num: number, i: index });
//     console.log('our number is: ', number);
// });

// console.log(nums);



// console.log(numbers.some(num => num > 300));
// console.log(numbers.every(num => num > 0));


// let result = numbers.reduce((acc, number) => {
//     console.log(number);
//     if(number > 0) {
//         acc += number;
//     }
//     return acc;
// }, 0);

// console.log('result', result);

// numbers.every
// numbers.some
// numbers.reduce





let users = [
    {
        username: 'Ivan',
        age: 25,
        isDeveloper: true
    },
    {
        username: 'Max',
        age: 35,
        isDeveloper: false
    },
];

const newUsers = users.reduce((acc, user) => {
    console.log(user);
    if(user.age > 30) {
        acc.push({ ...user, isDeveloper: true });
    }

    return acc;
}, []);

console.log(newUsers);
