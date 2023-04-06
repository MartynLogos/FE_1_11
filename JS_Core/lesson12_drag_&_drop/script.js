const zone1 = document.getElementById('zone1');
const zone2 = document.getElementById('zone2');
const minion = document.getElementById('minion');

let data;

zone1.ondragover = event => {
    event.preventDefault();
};

zone2.ondragover = event => {
    event.preventDefault();
};

minion.ondragstart = event => {
    data = event.target.id;
}

zone1.ondrop = event => {
    event.preventDefault();
    const element = document.getElementById(data);
    console.log(event);
    const x = event.offsetX;
    element.style.marginLeft = `${x}px`; 
    zone1.append(element);
};

zone2.ondrop = event => {
    event.preventDefault();
    const element = document.getElementById(data);
    let x = event.offsetX;
    if(x + element.offsetWidth > zone2.offsetWidth) {
        x -= element.offsetWidth;
    }
    element.style.marginLeft = `${x}px`; 
    zone2.append(document.getElementById(data));
};

const defaultPhoneValue = '+380';
const phone = document.getElementById('id');

const setDefaultValue = () => {
    phone.value = defaultPhoneValue;
};

// patter = +38(0__)-__-___;

phone.addEventListener('focus', setDefaultValue);
phone.addEventListener('keydown', event => {
    if(event.keyCode == 8 && phone.value.length <= 4) return;
    console.log(event);
    console.log(phone.value.length);

    // if(phone.value <= 4) {
    //     setDefaultValue();
    // }
});
