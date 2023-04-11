const select = document.querySelector('#fontSize');
// const first = document.querySelector('option');

// console.log(select);
// console.log(first);

select.addEventListener('change', event => {
    const value = event.target.value;
    event.target.querySelector('option').setAttribute('selected', false);
    event.target.selectedIndex = 0;
    console.log(value);
});
