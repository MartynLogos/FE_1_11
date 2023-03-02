// for, while, do while

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     // document.write('<h1>' + i + '</h1>');
//     document.write(`<h1>${i}</h1>`);
// }

// let a = 15;
// alert('hello:' + a)
// console.log('hello = ', a);

// let sum = 0;
// // sum++;
// // sum+=5;

// for(let i = 0; sum < 2000; i++) {
//     console.log('sum:', sum);   // 0 1 3 
//     console.log('i:', i);     // 1 2 3 
//     sum+=i;     // 1 3 6
// }

// console.log('result = ', sum);

// for(let i = 0 ; i < 100; i++) {
//     if(i < 20) {
//         console.log(i);
//     }
// }

// count++; count = count + 1;

// count = 1000; count = count / 2 - 20;  count > 0

// for (let count = 1000; count > 0; count = count / 2 - 20) {
//     console.log(count);
// }

// for(let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// for(let a = -166; a <= 99; a = 2*a + 200) {
//     if (a > -100) {// [-100, +100]
//         console.log(a);
//     }
// }


// let a = prompt('enter number'); // 2 * 2 * 2
// let b = prompt('enter stepin');//10 -10 // 3

// let c;
// let result = 1;

// // if(b > 0) {
// //     c = b
// // } else if(b < 0) {
// //     c = -b;
// // } else {
// //     console.log(result);
// // }

// if (b == 0) {
//     // result = 1;
//     console.log(1);
// } else {
//     // result = a;
//     // if (b > 0) {
//     //     c = b
//     // } else if (b < 0) {
//     //     c = -b;
//     // }
//     for (let i = 0; i < Math.abs(b); i++) { // a^b = a*a b раз;
//         if (b > 0) {              // a^-b= 1/a^b;
//             a *= a;
//         } else {
//             a /= a;
//         }
//         // a *= a;
//     }
//     // result = 1/a;
//     console.log(a);
// }


// |-10| = 10

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while(i > 10);



// let secret = 'banana';
// let guess;
// let numberOfTries = 5;
// while(guess != secret) {
//     guess = prompt('try to guess a fruit');
// }

// do {
//     if(numberOfTries < 0) {
//         break;
//     }

//     numberOfTries--;
//     guess = prompt('try to guess a fruit');

// } while(guess != secret)
// } while(guess != secret && numberOfTries > 0)


// let i = 0;
// let sum = 0;
// while (i < 10) {
//     // if(i == 5) {
//     //     break;
//     // }
//     if(sum > 30) {
//         break;
//     }

//     i++;
//     sum+=i;
//     console.log('i:', i);
//     console.log('sum:', sum);
// }



// let i = 0;
// let sum = 0;

// while (i < 10) {
//     i++;

//     if(i == 5) {
//         continue;
//     }

//     sum+=i;
//     console.log('i:', i);
//     console.log('sum:', sum);
// }

point: {
    for (let i = 1; i <= 4; i++) {
        console.log('week:', i);

        for (let j = 1; j <= 7; j++) {
            if(i== 3 && j == 3) {
                break point;
            }

            console.log('day:', j);
        }
    }
}

// console.log('week1');
// for(let i = 1; i <= 7; i++) {
//     console.log('day:',i);
// }
// console.log('week2');
// for(let i = 1; i <= 7; i++) {
//     console.log('day:',i);
// }
// console.log('week3');
// for(let i = 1; i <= 7; i++) {
//     console.log('day:',i);
// }
// console.log('week4');
// for(let i = 1; i <= 7; i++) {
//     console.log('day:',i);
// }
