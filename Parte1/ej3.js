function sumaCubos(...numbers) {
    let resultado = 0;
    
    for (const number of numbers) {
        resultado = resultado + Math.pow(number,3);
    }

    return resultado;
}

console.log(sumaCubos(1,5,9));