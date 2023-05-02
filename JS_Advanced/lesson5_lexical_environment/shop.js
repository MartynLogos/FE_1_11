
let balance = 1000;
let breadCount = 100;
let breadPrice = 25;

function getBalance() {
    return balance;
}

function checkBreadCount(n) {
    if (breadCount > n) {
        breadCount -= n;
        return true;
    }

    console.log('Shop doesn"t have enough bread');
    return false;
}

function sellBread(n) {
    if (checkBreadCount(n)) {
        balance += n * breadPrice;
        console.log(`You bought ${n} bread`);
        return;
    }

    throw new Error('Error occurred');
}

export {
    // getBalance as checkBalance,
    getBalance,
    sellBread
}
