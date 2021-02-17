/* Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados incluyendo n. */

function squaresSum(num) {
    
  let resultado = 0;

  for (let i = num; i > 0; --i) {
      resultado += Math.pow(i,2);
  }

  return resultado;
}

console.log(squaresSum(3));