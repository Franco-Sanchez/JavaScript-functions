function pontecia(num, pot) {
    return `${num} ^ ${pot} = ${Math.pow(num, pot)}`
}

console.log(pontecia(Number(prompt("Elija un número")), Number(prompt("¿A cuánto lo quiere elevar?"))));