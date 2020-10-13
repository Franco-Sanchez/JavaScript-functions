function areaTriangulo(base,altura) {
    return `(${base} * ${altura}) / 2 = ${(base * altura) / 2} cm2`;
} 

console.log(areaTriangulo(Number(prompt("Ingrese la base en cm")), Number(prompt("Ingrese la altura en cm"))));