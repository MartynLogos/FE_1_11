// 0. class before ES6
// 1. class in ES6
// 2. inheritance in ES6
// 3. getter, setter
// 3.5. id in class without constructor
// 4. encapsulation in js
// 5. static values and methods
// 6. MyDate from existing Date class


// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     console.log('created');
// }

// User.prototype.sleep = function() {
//     console.log('...');
// }

// function Employee(name, age, job, title, company = 'Logos') {
//     User.call(this, name, age);
//     this.job = job;
//     this.title = title;
//     this.company = company;
// }

// Employee.prototype = Object.create(User.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.sleep = function() {
//     console.log('Z-z-z-z');
// }

// const user = new User('Ivan', 26);
// const empl = new Employee('Petro', 34);


// CSS:
// classList
// className


// JS:
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     showUserInfo() {
//         console.log(`Name: ${this.name}, age: ${this.age}`);
//     }
// }

// class Developer extends User {
//     constructor(name, age, job, title) {
//         super(name, age);
//         this.job = job;
//         this.title = title;
//     }

//     showUserInfo() {
//         console.log('info');
//     }

//     work() {
//         console.log('Z-z-z-z');
//     }
// }

// const user = new User('Ivan', 33);
// const dev = new Developer('Max', 22, 'FE', 'junior');

// console.log(user);
// user.showUserInfo();
// // user.work();

// console.log(dev);
// dev.showUserInfo();
// dev.work();




// class User {
//     constructor(name, birthYear) {
//         this._name = name;
//         this._birthYear = birthYear;
//     }

//     get age() {
//         return new Date().getFullYear() - this._birthYear;
//     }

//     get name() {
//         console.log('we are getting name');
//         return this._name;
//     }

//     set name(value) {
//         console.log(value);
//         this._name = value;
//     }

//     updateUserData(name, age, ...) {
//         name = name;
//     }
// }

// const user = new User('Ivan', 1993);

// console.log(user);
// console.log(user.name);
// user.name = 'Alex';
// console.log(user.age);
// console.log(user);

// console.log(user);
// console.log(user.name);

// user.name = 'Olena';

// console.log(user);
// console.log(user.name);




// class User {
//     id = getUsersLength();

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const user1 = new User('Petro', 23);
// const user2 = new User('Ivan', 33);

// console.log(user1);
// console.log(user2);

// const users = [user1, user2];
// console.log(users);





// class User {
//     #password;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     get password() {
//         return this.#password;
//     }

//     #setPassword(value) {
//         this.#password = value;
//     }

//     updateUserData(name, age, password) {
//         if (name) {
//             this.name = name;
//         }
//         if (age) {
//             this.age = age;
//         }
//         if(password) {
//             this.#setPassword(password);
//         }
//     }
// }

// const user = new User('Ivan', 33);

// console.log(user);

// // user.setPassword('123');

// user.updateUserData('Petro', 44, 'qwertyuiop');

// console.log(user);

// // console.log(user);
// // user.password = '1234567890';

// console.log(user.#password);
// console.log(user.#password);



// String, Number 


// class MyMath {
//     static PI = 3.14;

//     static calculateCircleArea(radius) {
//         return this.PI * radius * radius;
//     }
// }

// const someMath = new MyMath();

// console.log(someMath);

// // console.log(someMath.PI);

// console.log(MyMath.PI);
// console.log(MyMath.calculateCircleArea(10));


// class User {
//     static usersCount = 0;
//     #id;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         User.usersCount++;
//         this.#id = User.usersCount;
//     }

//     static createUser(name, age) {
//         console.log('this', this);
//         return new this(name, age);
//     }
// }

// const user1 = new User('Alex', 25);
// const user2 = new User('Oleh', 33);

// console.log(user1);
// console.log(user2);
// console.log(User.usersCount);

// const user3 = User.createUser('Petro', 44);
// console.log(user3);



// String

class MyDate extends Date {
    months = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    getConvertedMonth() {
        return this.months[super.getMonth()];
    }
}

const date = new MyDate(new MyDate().setMonth(7));

console.log(date.getConvertedMonth());

// console.log(MyDate.getConvertedMonth());



class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    static compareCarsYear(car1, car2) {
        return car1.year < car2.year ? `${car1.brand} car is newer` : `${car2.brand} car is newer`;
    }
}


const car1 = new Car('Audi', 2013);
const car2 = new Car('Ford', 2010);

console.log(car1);
console.log(car2);

console.log(Car.compareCarsYear(car1, car2));

