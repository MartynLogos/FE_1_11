// events delegation
// keyboard events


// const items = document.querySelectorAll('.list-item');
// console.log(items);

// items.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log(item.innerText);
//     });
// });




// const add = document.querySelector('.btn');
// const list = document.querySelector('.list');

// add.addEventListener('click', () => {
//     const value = document.querySelector('.field').value;

//     const element = document.createElement('li');
//     element.className = 'list-item';
//     element.innerText = value;

//     list.append(element);
// });


// list.addEventListener('click', event => {
//     // console.log('works');
//     // console.log(event.target);
//     // console.dir(event.target);

//     if(event.target.nodeName == 'LI') {
//         console.log(event.target.innerText);
//     }
// })



// const field = document.querySelector('.field');

// console.dir(field)

// field.addEventListener('change', () => {
//     console.log('change');
// });

// field.addEventListener('keypress', () => {
//     console.log('keypress');
// });

// field.addEventListener('keydown', () => {
//     console.log('keydown');
// });

// field.addEventListener('keyup', () => {
//     console.log('keyup');
// });









// const list = document.querySelector('.list');
// const add = document.querySelector('.btn');


// const addListItem = () => {
//     const value = document.querySelector('.field').value;

//     const element = document.createElement('li');
//     element.className = 'list-item';
//     element.innerText = value;

//     list.append(element);
// };

// add.addEventListener('click', addListItem);


// field.addEventListener('keypress', event => {
//     // console.log(event);
//     // console.log(event.keyCode);

//     if(event.keyCode === 13) {
//         addListItem();
//     }
// });



// const ball = document.querySelector('.ball');

// let left = ball.offsetLeft;
// let up = ball.offsetTop;

// document.addEventListener('keydown', event => {
//     console.log(event);
//     console.log(event.keyCode);
//     // ball.style.Left = '20px';

//     if(event.keyCode === 37) {
//         left -= 10;
//         ball.style.left = `${left}px`;
//         ball.style.transform = 'rotate(-90deg)';
//     }
//     if(event.keyCode === 38) {
//         up -= 10;
//         ball.style.top = `${up}px`;
//         ball.style.transform = 'rotate(0deg)';
//     }
//     if(event.keyCode === 39) {
//         left += 10;
//         ball.style.left = `${left}px`;
//         ball.style.transform = 'rotate(90deg)';
//     }
//     if(event.keyCode === 40) {
//         up += 10;
//         ball.style.marginTop = `${up}px`;
//         ball.style.top = `${up}px`;
//         ball.style.transform = 'rotate(180deg)';
//     }
// });

const list = document.querySelector('.list');

document.onclick = () => {
    // console.log(1);
    // list.style['::marker'] = 'o';
    // document.querySelector(".list::marker").style.listStyleType = "circle";
    // list.style.listStyleType = "circle";
    list.classList.add('myStyle');
}