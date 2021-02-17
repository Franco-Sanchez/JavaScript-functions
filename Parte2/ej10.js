let convertirArray = (objeto) => {

    let arrFinal = [];

    for (const key in objeto) {
        arrFinal.push(key);
        arrFinal.push(objeto[key]);
    }

    return arrFinal;

}

console.log(convertirArray({ a: 1, b: 2 }));