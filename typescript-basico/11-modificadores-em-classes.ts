interface AnimalInterface {
    name: string;
    color: string;

    // correr();
    // andar();
    // comer();
}

class Animal implements AnimalInterface {
    private atributo;
    protected atributo1 = 'valor da variável atributo1';

    constructor(public name: string, public color: string) { }

    private correr() { }

    andar() {
        this.correr();
    }

    comer() {
        console.log('comer do animal');
    }
}

class Coelho extends Animal {
    tamanhoOrelha: number;

    comer() {
        // this.atributo; // Não é acessível, pois está como private em Animal
        // this.correr(); // Também é privado na classe Animal
        console.log(this.atributo1);
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
// coelho.correr(); // é privado na Classe Animal
coelho.andar();
coelho.comer();
// coelho.atributo1;