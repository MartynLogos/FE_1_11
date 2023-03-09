// let btn = document.querySelector('.btn');

// const user = {
//     username: 'Ivan',
//     showInfo: function() {
//         console.log(this.username);
//     }
// }

// user.username;
// user.showInfo();

// btn


// function sum(a, b) {
//     return a + b;
// }

// sum(2, 4);

// let result = sum(2, 4); // 6





// let btn = document.querySelector('.btn');
// let box = document.querySelector('.box');


// btn.onclick = fn;
// box.onclick = fn;

// function fn(event) {
//     console.log(event);
//     event.stopPropagation();
// }


// function fnWithCtrlKey() {
//     console.log('function with secret');
// }


// function showConfirmationMessage() {
//     console.log('Congratulation, you have good password');
// }

// let btn = document.querySelector('.btn');

// btn.addEventListener('click', event => {
//     console.log(event);
//     const field = document.querySelector('.field');
//     const value = field.value;

//     if(value.length >= 8 && value.length <= 16) {
//         showConfirmationMessage();
//     }
// });


// prompt();

// let btn = document.querySelector('.btn');

// btn.onclick = () => { console.log('click') };
// btn.onclick = () => { console.log('another one') };

// const firstClick = () => { console.log('click') };
// const secondClick = () => { console.log('another one') };

// btn.addEventListener('click', firstClick);
// btn.addEventListener('click', secondClick);

// btn.addEventListener('dblclick', () => {
//     console.log('double click');
//     btn.removeEventListener('click', firstClick);
//     btn.removeEventListener('click', secondClick);
// });

// function foo() {}

// const foo2 = () => {};


// let box = document.querySelector('.box');

// let width = box.clientWidth;

// // console.dir(box)

// box.addEventListener('mousemove', () => {
//     width++;
//     box.style.width = `${width}`
//     console.log(width);
// });


let box = document.querySelector('.box');
// let boxes = document.querySelectorAll('.box');

console.dir(box);

// box.addEventListener('mouseup', () => console.log('mouse up'))
// box.addEventListener('mousedown', () => console.log('mouse down'))
// box.addEventListener('mouseover', () => console.log('mouse over'))
// box.addEventListener('mouseout', () => console.log('mouse out'))
// box.addEventListener('contextmenu', event => {
//     console.log('context menu');
//     event.preventDefault();
// });

// boxes.forEach(box => box.addEventListener('focus', event => {
//         event.target.style.outline = '1px solid blue';
// }));

// boxes.forEach(box => box.addEventListener('blur', event => {
//     // console.log('blur');
//     if (event.target.value.length === 0) {
//         event.target.style.outline = '1px solid red';
//     } else {
//         event.target.style.outline = '1px solid green';
//     }
// }));

// box.addEventListener('focus', event => {
//     // console.log('focus');
//     // console.log(event.target);
//     // if(event.target.value.length === 0) {
//     //     event.target.style.outline = '1px solid red';
//     // } else {
//     //     event.target.style.outline = '1px solid green';
//     // }
// })


box.addEventListener('copy', () => console.log('copied'))

