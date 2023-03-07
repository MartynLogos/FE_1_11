// DOM


// console.log(document);
// console.dir(document);

// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.firstElementChild.previousElementSibling);
// console.log(document.body.children);

// const btn = document.getElementById('btn');

// console.log(btn);
// console.dir(btn);

// // document.body.style.background = 'red';

// // console.log(btn.innerHTML);
// console.log(btn.innerText);
// let btnText = btn.innerText;

// btnText += 'Submit';
// console.log(btn.innerText = btnText); // ClickSubmit

// const block1 = document.querySelector('.block1');
// const block2 = document.querySelector('.block2');

// console.log(block1.innerHTML);
// console.log(block1.innerText);
// console.log(block2.innerHTML);
// console.log(block2.innerText);

// let url = 'https://png.pngtree.com/png-clipart/20210309/original/pngtree-a-squatting-tabby-cat-png-image_5803660.jpg';

// const block1 = document.querySelector('.block1');

// block1.innerHTML = `
//     <h1>Hello</h1>
//     <img src='${url}'>
// `;


const list = document.querySelector('.list');

// console.log(list);
// console.dir(list);

// const listItems = document.querySelectorAll('.list-item');
// console.log(listItems);

const addItem = () => {
    const field = document.querySelector('.field');
    console.log(field);
    console.dir(field);

    const value = field.value;

    const element = document.createElement('li');
    element.innerText = value;
    element.classList.add('list-item');

    if(!value) {
        field.classList.add('error');
    } else {
        // list.append(element);
        list.prepend(element)
        field.classList.remove('error');
    }
    field.value = '';
}

const removeItem = () => {
    console.log(list.lastElementChild);
    // list.children[2];

    if(!!list.lastElementChild) {
        list.removeChild(list.lastElementChild)
    }
}



// function addClass() {
//     const text = document.querySelector('.text');

//     text.classList.add('green')
// }

// function removeClass() {
//     const text = document.querySelector('.text');

//     text.classList.remove('green')
// }

// function toggleClass() {
//     const text = document.querySelector('.text');

//     text.classList.toggle('green');
// }


// document.body.innerHTML += '<p>END</p>';