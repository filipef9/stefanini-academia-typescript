// booleanos
let success: boolean = false; // implícita

//success = 'Filipe dos Santos Nascimento';

// números
let num = 10;
//let num: number = 10.50;
//let num: number = 0xFA;

//num = true;
//num = 'string';

// strings
let _name = 'Filipe dos Santos Nascimento';
let name1: string = 'Filipe dos Santos Nascimento';

_name = `School of Net - ${name1}`;
console.log(_name);

// Arrays
let arrayStrings: string[] = ["a", "b", "c"];
let arrayStrings1: Array<string> = ["a", "b", "c"];

// arrayStrings = "Não dá certo";

// Enums
enum estado_civil {
    Solteiro = 'solteiro',
    Casado = 'casado',
    Divorciado = 'divorciado'
};

let meu_estado_civil: estado_civil = estado_civil.Casado;

if (meu_estado_civil == estado_civil.Casado) {
    console.log('Sou casado.');
}
