let encontrarIndice = (palabra, caracter) => {

    let arrIndices = []

    let str = palabra;

    let valorInicial = str.indexOf(caracter);

    let valorFinal = str.lastIndexOf(caracter);

    arrIndices.push(valorInicial);

    arrIndices.push(valorFinal);

    return arrIndices;

}

console.log(encontrarIndice("hello", "l"));
console.log(encontrarIndice("circumlocution", "c"));