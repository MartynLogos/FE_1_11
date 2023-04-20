const getBtn = document.querySelector('.get');
const setBtn = document.querySelector('.set');
const deleteBtn = document.querySelector('.delete');

// console.log(setBtn);
// console.log(getBtn);



// sessionStorage 
// localStorage 


// setBtn.addEventListener('click', () => {
//     let username = prompt('Enter your name');
//     sessionStorage.setItem('name', username);
// });

// const username = sessionStorage.getItem('name') ?? prompt('Your name?');
// console.log(username);


// setBtn.addEventListener('click', () => {
//     const value = document.querySelector('.input-field').value;
//     if(!value) return;
//     sessionStorage.setItem('name', value)
// });

// getBtn.addEventListener('click', () => {
//     const username = sessionStorage.getItem('name');
//     console.log(username);
// })

// deleteBtn.addEventListener('click', () => {
//     sessionStorage.removeItem('name');
// });



// sessionStorage.setItem('name', 'Ivan');
// sessionStorage.setItem('lastName', 'Petrenko');

// console.log(sessionStorage.length);

// for(let i, j,k = 0; i < sessionStorage.length; i++) {
//     console.log(sessionStorage.key(i));
// }

// sessionStorage.clear();



// const numbers = [
//     {
//         firstName: 'Petro',
//         age: 30
//     },
//     {
//         firstName: 'Olena',
//         age: 35
//     }
// ];

// const person = {
//     firstName: 'Ivan',
//     age: 25
// }

// sessionStorage.setItem('user', person);
// sessionStorage.setItem('numbers', numbers);

// JSON

// let personToJson = JSON.stringify(person);

// console.log(personToJson);

// const obj2 = personToJson;

// console.log(obj2);
// console.log(typeof obj2);
// console.log(obj2.firstName);

// const parsedData = JSON.parse(personToJson);

// console.log(parsedData);
// console.log(typeof parsedData);
// console.log(parsedData.firstName);



// const person = {
//     firstName: 'Ivan',
//     age: 25
// }

// const numbers = [
//     {
//         firstName: 'Petro',
//         age: 30
//     },
//     {
//         firstName: 'Olena',
//         age: 35
//     }
// ];

// sessionStorage.setItem('user', JSON.stringify(person));
// sessionStorage.setItem('numbers', JSON.stringify(numbers));

// const jsonData = `{
//     "name": "Ivan",
//     "age": "25"
// }`;

// console.log(jsonData);

// const data = JSON.parse(jsonData);

// console.log(data);


// save user with next data: 1. first name; 2. last name; 3. age; 4. languages: ['ua', 'en', 'pl', 'de']

const form = document.forms.form;
const { firstName, lastName, age, languages } = form;

// const user = { fullName: '', age: '', languages: [] };
// console.log(user);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = JSON.parse(sessionStorage.getItem('person'));

    const userLanguages = data?.languages || [];
    userLanguages.push(languages.value);

    const user = {
        firstName: firstName.value || data?.firstName,
        lastName: lastName.value || data?.lastName,
        age: age.value || data?.age,
        languages: userLanguages
    };

    sessionStorage.setItem('person', JSON.stringify(user));
});


