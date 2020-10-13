function calculator(num1, ope, num2) {
    switch (ope) {
        case "+":
            return `${num1} ${ope} ${num2} = ${num1 + num2}`; 
        case "-":
            return `${num1} ${ope} ${num2} = ${num1 - num2}`;
        case "/":
            return `${num1} ${ope} ${num2} = ${num1 / num2}`;
        case "x":
            return `${num1} ${ope} ${num2} = ${num1 * num2}`;
        case "%":
            return `${num1} ${ope} ${num2} = ${num1 % num2}`;
        default:
            return "El parámetro no es reconocido.";
    }
}

console.log(calculator(Number(prompt("Ingrese el primer número")), prompt("¿Qué operación desea realizar? '+, -, /, x, %'"), Number(prompt("Ingrese el segundo número"))));