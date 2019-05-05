let meu_nome: any = 'Filipe dos Santos Nascimento';

let quantidade_caracteres: number = meu_nome.length;
console.log(quantidade_caracteres);

let count = (<string> meu_nome).length;
console.log(count);

let count1 = (meu_nome as string).length;
console.log(count1);

let obj = {
    name: 'Filipe dos Santos Nascimento'
};

// obj.texto = 'School of Net';
(<any> obj).texto = 'School of Net';
console.log(obj);

(obj as any).texto = 'School of Net';
console.log(obj);

let num = 2;

let numString = num + "";
console.log(typeof numString);

let stringNum = "234";

let num2 = +stringNum;
console.log(typeof num2);
