const soma = function (x: number, y: number): number {
    return x + y;
}

let resultado: number = soma(2, 3);
console.log(resultado);

const soma2 = (x: number, y: number): number => x + y;
resultado = soma2(3, 4);
console.log(resultado);

let funcao = (name: string) => {
    return `Hello ${name}`;
}

let funcao1 = (name: string) => `Hello ${name}`;

let funcao2 = name => `Hello ${name}`;
console.log(funcao2('Filipe'));

let funcaoDefaultParameters = (first_name, last_name = 'Nascimento') => `${first_name} ${last_name}`;
console.log(funcaoDefaultParameters('Filipe'));
console.log(funcaoDefaultParameters('Filipe', 'dos Santos'));

let funcaoOptionalParameters = (first_name: string, last_name?: string) => {
    if (typeof last_name == "undefined") {

    }

    console.log(last_name);
};

funcaoOptionalParameters('Filipe');