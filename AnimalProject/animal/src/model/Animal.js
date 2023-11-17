class Animal {
    constructor(name, gender, weight, breed) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.breed = breed;
    }

    present() {
        return `Hello I'm ${this.name}. My gender is ${this.gender}.
        My weight is ${this.weight}. I'm ${this.breed}`;
    }
}

export class Dog extends Animal {
    constructor(name, gender, weight, breed,) {
        super(name, gender, weight, breed);
    }

    bark() {
        return "Woof";
    }
}

export class Cat extends Animal {
    constructor(name, gender, weight, breed,) {
        super(name, gender, weight, breed);
    }

    meow() {
        return "Meow";
    }
}

export default {
    Dog, 
    Cat
};