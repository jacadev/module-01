'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 0 || n === 1) return 1;
   else if (n < 0) return 0; 
   return n * nFactorial(n - 1)
}

// EJERCICIO 2
function nFibonacci(n) {}

// EJERCICIO 3
function Queue() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
