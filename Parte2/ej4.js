let sumaNumeros = (...numbers) => {
    let resultado = 0;
    
    for (const number of numbers) resultado = resultado + number;

    return resultado;
}

console.log(sumaNumeros(1,2,3,4,5));