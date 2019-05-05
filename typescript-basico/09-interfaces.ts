interface ObjectValue {
    category: string;
    product?: string;
}

//function show({category, product}: {category: string, product: string}) {
//    console.log(category);
//    console.log(product);
//}

function show({category, product}: ObjectValue) {
   console.log(category);
   console.log(product);
}

show({category: 'Categoria1', product: 'Produto1'});
show({category: 'Categoria2'});

// let obj: ObjectValue = {
//     category: 'Categoria3',
//     asdf: 'asdf'
// };

let obj: ObjectValue = {
    category: 'Categoria4',
    product: 'Produto4'
}

class Product implements ObjectValue {
    category: string;
    product: string;
}

let product: Product = new Product();
product.category = 'Categoria5';
console.log(product.category);
console.log(product.product);
