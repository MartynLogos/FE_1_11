// class Person {
//     name: string;
//     age: number;
//     showInfo(): void {
//         console.log(`Name: ${this.name}, age: ${this.age}`);
//     }
// }

// const person = new Person();

// person.name = 'Petro';
// person.age = 33;
// person.showInfo();

// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     showInfo(): void {
//         console.log(`Name: ${this.name}, age: ${this.age}`);
//     }
// }

// const person = new Person('Ivan', 25);
// person.showInfo();


// class Person {
//     public name: string;
//     public age: number;
//     // private _address: string;
//     private _id: number;
//     constructor(name: string, age: number, ) {
//         this.name = name;
//         this.age = age;
//         // this._address = address;
//         this._id = this.generateID();
//     }
//     private generateID(): number {
//         return Math.round(Math.random() * 10e9);
//     }
//     public showInfo(): void {
//         console.log(`Name: ${this.name}, age: ${this.age}, id: ${this._id}`);
//     }
// }


// const person = new Person('Ivan', 25);
// // console.log(person._address);
// // person.
// person.showInfo();

// class Person {
//     public name: string;
//     public age: number;
//     protected address: string;
//     constructor(name: string, age: number, address: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     public showInfo(): void {
//         console.log(`Name: ${this.name}, age: ${this.age}`);
//     }
// }

// class Employee extends Person {
//     public job: string;
//     public title: string;
//     constructor(name: string, age: number, address: string, job: string, title: string) {
//         super(name, age, address);
//         this.job = job;
//         this.title = title;
//     }

//     public showJobInfo(): void {
//         console.log(`Job: ${this.job}(${this.title}). Address: ${this.address}`);
//     }
// }



// const person = new Person('Ivan', 25, 'Franka 61');
// person.add
// const employee = new Employee('Petro', 33, 'Syhivska 19', 'FE', 'middle');
// employee.showJobInfo();
// employee.address

// class Person {
//     readonly id: number;
//     public name: string;
//     public age: number;
//     private _address: string;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         this.id = this.generateID();
//     }

//     private get address(): string {
//         return this._address;
//     }

//     private set address(value: string) {
//         this._address = value;
//     }

//     private generateID(): number {
//         return Math.round(Math.random() * 10e9);
//     }

//     public showInfo(): void {
//         console.log(`Name: ${this.name}, age: ${this.age}, address: ${this.address}`);
//     }

//     public updateUserInfo(name: string, age: number, address: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }



// const person = new Person('Ivan', 25);
// person.updateUserInfo('Petro', 33, 'Stryiska 108')
// person.showInfo();
// console.log(person);
// person.id = 23;
// person.address = 'Franka 61';
// console.log(person.address);

// const obj = { name: 'Petro' };

// console.log(obj.name);
// obj.name = 'Oksana';
// console.log(obj.name);

// interface IPerson {
//     name?: string;
// }

// const obj: IPerson = {};

// Object.defineProperty(obj, 'name', {
//     value: 'Ivan',
//     writable: false
// });

// console.log(obj.name);
// obj.name = 'Oksana';
// console.log(obj.name);


// interface IPerson {
//     name: string;
//     age: number;
//     showInfo(): void;
// }

// const obj: IPerson = {
//     name: 'Ivan',
//     age: 25,
//     showInfo() {
//         console.log(this.name);
//     }
// }

// function createPerson(obj: IPerson): IPerson {
// function createPerson(value: string, num: number): IPerson {
//     return {
//         name: value,
//         age: num,
//         showInfo() {
//             console.log(this.name);
//         }
//     }
// }

// class Person {
//     public name: string;
//     public age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }





interface IPerson {
    name: string;
    age: number;
    showInfo(): void;
    address?: string;
}

// interface IEmployee extends IPerson {

// }


class Person implements IPerson {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    showInfo(): void {
        throw new Error("Method not implemented.");
    }
    
}

const users: Array<IPerson> = [{
    name: 'Ivan',
    age: 25,
    showInfo(){console.log(1)}
}];
