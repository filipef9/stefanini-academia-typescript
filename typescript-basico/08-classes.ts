class Animal {
    /* name: string;
    color: string; */

    constructor(public name: string, public color: string) {
        console.log('Estou dentro do construtor.');
    }
}

let myAnimal: Animal = new Animal('Rabbit', 'Branco');

console.log(myAnimal.name);
console.log(myAnimal.color);
