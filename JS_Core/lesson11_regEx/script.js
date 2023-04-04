// RegExp
// <></>

// const regexp = /\d/;    // our text must contains minimum 1 letter or number

// console.log(regexp.test('!@#$%^&*'));   // false
// console.log(regexp.test('!@#$%^&*w'));  // true...
// console.log(regexp.test('2'));
// console.log(regexp.test('w'));


// const regexp = /hello/;                          // include
// console.log(regexp.test('hello hi hello'));

// const regexp = /^hello/;                         // starts with
// console.log(regexp.test('hello hi hello'));
// console.log(regexp.test('hi hello'));

// const regexp = /hello$/;                         // ends with
// console.log(regexp.test('hello hi'));
// console.log(regexp.test('hi hello'));

// const regexp = /^hello$/;                           // exactly that word
// console.log(regexp.test('hello'));
// console.log(regexp.test('hello hi hello'));



// []

// const regexp = /[a-z]/;

// console.log(regexp.test('hello'));
// console.log(regexp.test('h'));
// console.log(regexp.test('1'));
// console.log(regexp.test('A'));
// console.log(regexp.test('!'));
// console.log(regexp.test('HELLo'));


// const regexp = /[a-zA-Z0-9]/;
// const regexp = /[^0-9]/;

// console.log(regexp.test(0));
// console.log(regexp.test('q'));
// console.log(regexp.test('!'));
// console.log(regexp.test('1'));
// console.log(regexp.test('hello1'));


// console.log(/^\d$/.test(2));
// console.log(/^\d$/.test(22));
// console.log(/^\d$/.test('h'));

// console.log(/^\d?$/.test(''));
// console.log(/^\d?$/.test(2));
// console.log(/^\d?$/.test(23));
// console.log(/^\d?$/.test('h'));

// 068 88 38 438
// 8068 88 38 438
// 38068 88 38 438
// +38068 88 38 438
// +38(068) 88 38 438

// +380 68 88 38 438


// console.log(/^\d+$/.test('1'));
// console.log(/^\d+$/.test('12'));
// console.log(/^\d+$/.test(''));
// console.log(/^\d*$/.test(''));
// console.log(/^\d*$/.test('1'));
// console.log(/^\d*$/.test('2'));

// console.log(/^\+?\d{10,12}$/.test('0688838438'));
// console.log(/^\+?\d{10,12}$/.test('80688838438'));
// console.log(/^\+?\d{10,12}$/.test('380688838438'));
// console.log(/^\+?\d{10,12}$/.test('+380688838438'));

// console.log(/^\w{1,}/.test(''));
// console.log(/^\w{1,}/.test('h'));
// console.log(/^\w{1,}/.test('hello'));
// console.log(/^\w{1,}/.test('hellohellohellohellohellohellohellohellohellohello'));

// const regexp = /\^|\||\\/;
// console.log(regexp.test('\\'));
// console.log(regexp.test('1'));


// const loginRegExp = /[a-zA-Z]{1,}/;
const loginRegExp = /\w{4,20}/;
// const passwordRegExp = /\w{8,20}/;
const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\!\\\/\^\?])[\w@!?*-+]{8,20}$/;

/*
    - Capital letter (A)
    - small letter (a)
    - number (0)
*/

const form = document.forms.form;

console.log(form);

// console.log(form);
// console.log(form.submit);

const { login, password, privacy, submit } = form;


form.addEventListener('submit', event => {
    event.preventDefault();

    if(!loginRegExp.test(login.value)) {
        console.log('login error');
        return;
    }

    if(!passwordRegExp.test(password.value)) {
        console.log('password error');
        return;
    }

    if(!privacy.checked) {
        console.log('privacy policy error');
        return;
    }

    console.log('success');
});


