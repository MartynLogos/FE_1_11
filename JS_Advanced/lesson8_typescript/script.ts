// var a = 10;
// var b = 'script';
// const d = 'dddd';


// let a: number;
// let b = 5;

// a = 'str';
// b = 'str';

// let username = 'Ivan';
// let age = 25;
// const message: string = `Hello I am ${username}, I am ${age} years old`;



// let a: null = null;





// Types: 

// 1. Array

// const numbers: number[] = [1, 2, 3, 4];
// const colors: Array<string> = ['red', 'green', 'blue'];
// const list: any[] = [1, '2', true, {}, []];

// let a: any;

// a = 10;
// a = 'str';



// 2. Tuple
// let userData: [string, number, string, number] = ['userAge', 25, 'str', 25];


// 3. Unknown

// let a: unknown;
// a = 5;
// a = 'str';
// a.split()

// let obj: unknown;
// obj.name;




// 4. Enum

// enum CarModels {
//     BMW,
//     AUDI,
//     RENO = 4,
//     OPEL
// }

// console.log(CarModels.RENO);
// console.log(CarModels.OPEL);

// enum CarModels {
//     BMW = 'Bmw',
//     AUDI = 'Audi'
//     RENO = 'Reno',
//     OPEL = 'Opel'
// }


// const car = { model: CarModels.BMW }
// console.log(CarModels.RENO);
// console.log(CarModels.OPEL);

// if (car.model === CarModels.BMW)


    // enum API {
    //     main = '/',
    //     downloads = './downloads',
    //     documents = './documents'
    // }


// enum Brands {
//     APPLE = 'Apple',
//     SAMSUNG = 'Samsung',

// }

// class Phone {
//     private brand: Brands;
// }



// 5. Union

// let id: number | string;

// id = 5;
// id = 'dsaf1ee2-3213f';


// 6. Types

// type ID = number | string;

// let a: ID = 5;

// type Some = ID | boolean;

// let some: Some;

// some = 5;
// some = 'str';
// some = true;
// some = {};



// function sum(): number {
//     console.log(1);
//     return 1;
// }


// function greeting(username: string | number): string {
//     return `Hello ${username}`;
// }

// greeting('Alex');
// greeting(25);

// function greeting(username: string, ending?: string): string {
//     return `Hello ${username} ${ending || ''}`;
// }

// console.log(greeting('Alex'));
// console.log(greeting('Alex', '!'));



function sum(): never {
    throw new Error();
}

// function sum(): void {
//     console.log(1);
// }
