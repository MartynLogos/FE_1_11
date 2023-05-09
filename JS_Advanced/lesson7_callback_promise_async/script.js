// callback

// function first(callback) {
//     console.log('function started');
//     callback();
// }

// let fn = function() {
//     console.log('callback');
// };

// first(fn);
// first(function() {
//     console.log('callback');
// });


// function first() {
//     console.log('first');
// }

// function second() {
//     console.log('second');
// }


// first();
// second();


// function first() {
//     console.log('first function started');
//     setTimeout(() => {
//         console.log('first');
//     }, 3000);
//     console.log('first ended');
// }

// function second() {
//     console.log('second function started');
//     setTimeout(() => {
//         console.log('second');
//     }, 2000);
//     console.log('second ended');
// }


// first();
// second();




// function doSomeHw(subject, callback) {
//     console.log(`Starting my ${subject} homework`);
//     callback();
// }

// doSomeHw('Math', () => {
//     console.log('homework is done');
// });


// getData(url, function(data, error) {
//     if (error) {
//         console.log(error);
//     } else {
//         processData(data, function(error, processedData) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 processedData(data);
//             }
//         })
//     }
// });




// Promise 

// const success = false;

// const promise = new Promise((resolve, reject) => {
//     if (success) {
//         resolve('Request sent successfully');
//     } else {
//         reject('Error occurred during request');
//     }
// });


// promise
//     .then(message => console.log(message))
//     .catch(error => console.log(error))
//     .finally(() => console.log('request finished'));



// function applyCV() {
//     Math.random() > 0.5
//         ? interview()
//         : console.log('not enough experience');
// }

// function interview() {
//     console.log('your CV is good, interview needed')

//     Math.random() > 0.5
//         ? console.log('you pass interview, welcome')
//         : console.log('not enough skills');
// }

// applyCV();



// function applyCV() {
//     const promise = new Promise((resolve, reject) => {
//         Math.random() > 0.5
//             ? resolve('your CV is good, interview needed')
//             : reject('not enough experience');
//     });

//     return promise;
// }

// function interview(invitation) {
//     console.log(invitation);

//     const promise = new Promise((resolve, reject) => {
//         Math.random() > 0.5
//             ? resolve('you pass interview, welcome')
//             : reject('not enough skills');
//     });

//     return promise;
// }

// applyCV()
//     .then(message => interview(message))
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('response from first promise')
//     }, 2000)
// });

// const promise2 = new Promise((resolve, reject) => {
//     // Math.random() > 0.5
//     //     ? resolve('response from second promise')
//     //     : reject('error occurred');
//     setTimeout(() => {
//         resolve('response from second promise')
//     }, 1000)
// });

// // Promise.all([promise1, promise2])
// //     .then(result => console.log(result))
// //     .catch(error => console.log(error))
// Promise.race([promise1, promise2])
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// function fn(){
//     console.log(1);
// }

// XHR => fetch

// xhr('get', url)

// let url = 'https://www.omdbapi.com/?i=tt3896198&apikey=ab1f95bf';

// fetch(url)
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })

const url = 'http://localhost:3000/posts/';
const getDeleteUrl = url + '2';

const getBtn = document.querySelector('.get');
const postBtn = document.querySelector('.post');
const deleteBtn = document.querySelector('.delete');


getBtn.addEventListener('click', get);
postBtn.addEventListener('click', e => postData(e));
deleteBtn.addEventListener('click', deleteData);

function get() {
    return fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

function postData(e) {
    e.preventDefault();
    const post = {
        title: "my title",
        author: "Martyn"
    };

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


function deleteData(e) {

    return fetch(getDeleteUrl, {
        method: 'DELETE',
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
