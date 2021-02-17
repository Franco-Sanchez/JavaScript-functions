let filtro = (...values) => {

    let noStrings = values.filter(value => typeof value !== "string");

    return noStrings;

}

console.log(filtro(true, "Hola", 1, "Hello", null, "Hi"));