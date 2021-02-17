let minMax = (...numbers) => {
    let arrFinal = [];

    arrFinal.push(Math.min(...numbers));
    arrFinal.push(Math.max(...numbers));

    return arrFinal;
}

console.log(minMax(1, 2, 3, 4, 5));