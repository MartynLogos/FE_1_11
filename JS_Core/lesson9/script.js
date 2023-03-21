// console.dir(document);
// console.log(document.body.scrollHeight);
// console.log(document.body.scrollWidth);



// console.log(document.body.scrollHeight);
// console.log(document.body.offsetHeight);
// console.log(document.body.clientHeight);
// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.offsetHeight);
// console.log(document.documentElement.clientHeight);

// let height = Math.max(
//     document.body.scrollHeight
// )


// scrollTo, scrollBy, scrollIntoView

// document.

// document.querySelector('.btn').addEventListener('click', () => {
//     const elem = document.getElementById('element');
//     elem.scrollIntoView(false);
// })

// const scrlBy = document.querySelector('.scrlBy');

// document.onscroll = () => {
//     const clientHeight = document.documentElement.clientHeight;
//     const btnPosition = scrlBy.offsetTop;
//     const currentScroll = document.documentElement.scrollTop;

//     // console.log(clientHeight + currentScroll)

//     // console.log('clientHeight => ', clientHeight)
//     // console.log('btnPosition => ', btnPosition);
//     // console.log('currentScroll => ', currentScroll);

//     if (currentScroll < btnPosition && currentScroll > btnPosition - clientHeight) {
//         console.log('now you can see this button');
//     }

//     // console.log('scroll');
    
//     // console.dir(document.body)
// }

// console.log({});



// const user = { name: 'Ivan', age: 25 };

// const element = document.createElement('div');

// // element.classList
// // element.className

// element.innerHTML = `
//     <h1 class='username'>${user.name}</h1>
//     <h2>${user.age}</h2>
//     <button onclick="foo()">buy</button>
// `;

// document.body.append(element);



// Завдання 1.

// Текстовий і біля інтерактивний елемент(кнопка, чекбокс, радіобатон)
// Клік на "елемент" ваш текст стає жирним (bold)


// const text = document.querySelector('.text');
// const checkbox = document.querySelector('#toggle');

// const fn = () => {
//     if (checkbox.checked) {
//         text.classList.add('bold');
//     } else {
//         text.classList.remove('bold');
//     }
// }

// checkbox.addEventListener('change', fn);

// fn();



// const select = document.querySelector('.select');
// const unselect = document.querySelector('.unselect');

// const checkboxes = document.querySelectorAll('.checkbox');

// select.addEventListener('click', () => {
//     checkboxes.forEach(elem => {
//         elem.checked = true;
//     })
// });

// unselect.addEventListener('click', () => {
//     checkboxes.forEach(elem => {
//         elem.checked = false;
//     })
// })



const select = document.querySelector('#select');
const unselect = document.querySelector('#unselect');

const checkboxes = document.querySelectorAll('.checkbox');

select.addEventListener('click', () => {
    checkboxes.forEach(elem => {
        elem.checked = true;
    })
});

unselect.addEventListener('click', () => {
    checkboxes.forEach(elem => {
        elem.checked = false;
    })
})

checkboxes.forEach(elem => {
    elem.addEventListener('change', () => {
        const allChecked = [...checkboxes].every(checkbox => checkbox.checked);
        
        // if(allChecked) {
        //     select.checked = true;
        // }
        select.checked = allChecked;
    })
})
