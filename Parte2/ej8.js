let numMayores = (...matrices) => {

    let arrFinal = [];

    for (const matriz of matrices) arrFinal.push(Math.max(...matriz));

    return arrFinal;


}

console.log(numMayores([4, 2, 7, 1],[20, 70, 40, 90],[1, 2, 0]));