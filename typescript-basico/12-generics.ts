let myArray: Array<number> = [];

function funcao(array: Array<number>) { }

function funcao1<T>(param: T): T {
    return param;
}

let variableNumber: number = funcao1<number>(2);
let variableString: string = funcao1<string>('2');

class Lista<T> {
    itens: Array<T> = [];

    add(item: T) {

    }

    remove(item: T) {

    }
}

let listaNumeros = new Lista<number>();