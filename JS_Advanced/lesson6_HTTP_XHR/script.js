// try catch finally, HTTP, XHR

// 1. try catch finally

// const a = 10;
// a = 3;


// console.log(a);


// console.log(10);


// try {
//     console.log(10);
// } catch(error) {

// } finally {
//     console.log('function completed successfully');
// }

// try catch finally, try catch, try finally


// try {
//     console.log('started');
//     console.log(a);
// } catch(error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log('error occurred');
//     // alertErrorMessage(error.message);
// } finally {
//     console.log('function completed');
// }




// throw new Error


// const jsonData = '{"name": Ivan", "age": 23}';

// // console.log(jsonData);

// try {
//     console.log('started');
//     console.log(JSON.parse(jsonData));
// } catch(error) {
//     // console.log(error.name);
//     if (error instanceof TypeError) {
//         console.log(error.message);
//     } else {
//         console.log('Something went wrong');
//     }
// } finally {
//     console.log('completed');
// }



// try {
//     console.log('started');
//     throw new Error('ERROR');
// } catch(e) {
//     console.log(e);
//     // console.log('error occurred');
// } finally {
//     console.log('finished');
// }




// 2. HTTP

// xhr, fetch

// 3. XHR


// const xhr = new XMLHttpRequest();
// const url = './file.html';


// xhr.open('GET', url, false);
// xhr.send();

// console.log(xhr.response);
// console.log(xhr.responseText);

// const user = {
//     name: 'Ivan',
//     age: 25,
//     isDeveloper: true,
//     languages: ['ua', 'pl', 'de', 'es']
// }

/* Requests methods:
    * GET - витягнути дані
    * POST - відправити дані / створити
    * PUT - оновлення даних { name: 'Petro', age: 25, isDeveloper: true }
    * PATCH - часткове оновлення даних
    * DELETE - видалення
    * HEAD
    * OPTIONS
*/


// document.querySelector('.btn').addEventListener('click', () => {
//     const xhr = new XMLHttpRequest();
//     const url = './file.html';

//     xhr.open('GET', url, false);
//     xhr.send();
    
//     console.log(xhr.response);
//     console.log(xhr.responseText);

//     document.body.innerHTML += xhr.responseText;
// });


const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=ab1f95bf';


// document.querySelector('.btn').addEventListener('click', () => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url, true);
//     xhr.send();
    
//     xhr.onreadystatechange = () => {
//         if (xhr.status === 200 && xhr.readyState == 4) {
//             const response = JSON.parse(xhr.response);
//             console.log(response);
//             // console.log(xhr.responseText);
//             document.body.style.background = `url('${response.Poster}')`;
//         }
//     }
// });

/* readyState
    * 1 - ініціалізація запиту
    * 2 - відкриття запиту
    * 3 - відправлення запиту
    * 4 - отримання респонсу
*/

/* Status code:
    * 1 - інформаційні 101
    * 2 - успішні виконання
    * 3 - команди перенаправлення
    * 4 - помилки клієнта
    * 5 - помилки сервер
*/




// document.querySelector('.btn1').addEventListener('click', () => {
//     console.log('function started');
//     const xhr = new XMLHttpRequest();
//     const url2 = './file.html';

//     xhr.open('GET', url2, false);
//     xhr.send();
    
//     console.log(xhr.response);
//     // console.log(xhr.responseText);

//     // document.body.innerHTML += xhr.responseText;
//     console.log('function finished');
// });

// document.querySelector('.btn2').addEventListener('click', () => {
//     console.log('function started');
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url, true);
    
//     xhr.onreadystatechange = () => {
//         if (xhr.status === 200 && xhr.readyState == 4) {
//             const response = JSON.parse(xhr.response);
//             console.log(response);
//             // console.log(xhr.responseText);
//             // document.body.style.background = `url('${response.Poster}')`;
//         }
//     }

//     xhr.send();

//     console.log('function end');
// });



document.querySelector('.btn2').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState == 4) {
            const response = JSON.parse(xhr.response);
            console.log(response);
        }
    }
    xhr.send();
});
