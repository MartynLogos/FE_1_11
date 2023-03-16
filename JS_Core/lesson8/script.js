// const forms = document.forms;

// console.log(forms);

// // const first = forms.first;
// const first = forms[0];

// console.log(first);

// const btn = first.querySelector('input');

// console.log(btn);

// first.addEventListener('click', event => {
//     console.log(event.target.type);
//     if (event.target.type === 'button') {
//         event.target.type = 'checkbox';
//     } else {
//         event.target.type = 'button';
//     }
//     event.target.checked = false;
// });


// document.addEventListener('click', event => {
//     console.log(event);
//     // console.log(event.target);
// })


// btn:
/*
    1. - '' - type something
    2. - 'text' - text 
*/

// const second = document.forms['second'];

// console.log(second);

// const formText = second.querySelector('[type = "text"]')
// const formBtn = second.querySelector('[type = "button"]')

// console.log(formText);
// console.log(formBtn);

// formBtn.onclick = () => {
//     if (!formText.value) {
//         console.log('Please, type something');
//     } else {
//         console.log(formText.value);
//         console.log(formText.defaultValue);
//     }
//     console.dir(formText);
// }

// const third = document.forms['third'];


// console.dir(third);
const select = third.querySelector('select');
console.dir(select.selectedOptions[0].text);
console.dir(select.selectedOptions[0].value);





// const second = document.forms[0];

// second.onsubmit = event => {
//     event.preventDefault();
//     console.log('submitted');
//     second.reset();
// }



/* 
    0. log user info (first, last names)

    1. submit:
        if privacy checked - successfully registered
        else - access denied

    2. (additional) return an object
*/

const form = document.forms.fourth;

const firstName = form.firstName;
const lastName = form.lastName;
const policy = form.policy;

form.addEventListener('submit', event => {
    event.preventDefault();

    if(!firstName.value || !lastName.value || !policy.checked) {
        console.log('access denied');
        return;
    }

    const user = {
        username: firstName.value,
        userLastName: lastName.value,
    };

    console.log(user);
    return user;
})
