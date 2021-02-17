let matrizObjectos = (...objetos) => {

    let resultado = 0;

    for (const objeto of objetos) resultado = resultado + objeto.budget;

    return resultado;

}

console.log(matrizObjectos({name: "John", age: 21, budget: 23000}, {name: "Steve", age: 32, budget: 40000}, {name: "Martin", age: 16, budget: 2700}));