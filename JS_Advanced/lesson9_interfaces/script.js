class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        throw new Error("Method not implemented.");
    }
}
const users = [{
        name: 'Ivan',
        age: 25,
        showInfo() { console.log(1); }
    }];
