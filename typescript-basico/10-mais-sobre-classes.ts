interface AnimalInterface {
    name: string;
    color: string;

    correr();
    andar();
}

class Animal implements AnimalInterface {
    constructor(public name: string, public color: string) { }

    correr() { }

    andar() { }

    comer() {
        console.log('comer do animal');
    }
}

class Coelho extends Animal {
    tamanhoOrelha: number;

    comer() {
        super.comer();
        console.log('comer do coelho');
    }
}

let myAnimal: Animal = new Animal('coelho', 'branco');
console.log(myAnimal.name);
console.log(myAnimal.color);

let coelho: Coelho = new Coelho('meu coelho', 'preto');
console.log(coelho.name);
console.log(coelho.color);
coelho.correr();
coelho.andar();
coelho.comer();