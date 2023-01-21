'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 0 || n === 1) return 1;
   else if (n < 0) return 0; 
   return n * nFactorial(n - 1)
}

// EJERCICIO 2
function nFibonacci(n) {
   if (n === 0) return 0;
   else if (n === 1) return 1;    
   return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// EJERCICIO 3

function Queue() {
   this.array = [];
}

Queue.prototype.enqueue = function(value){
   this.array.push(value);
}

Queue.prototype.dequeue = function(){
   return this.array.shift();
}

Queue.prototype.size = function(){
   return this.array.length;
}

// The same constructor function but built with class syntax instead
/*
class Queue {
   constructor() {
      this.array = [];
   }
   enqueue(value) {
      this.array.push(value);
   }
   dequeue() {
      return this.array.shift();
   }
   size() {
      return this.array.length;
   }
}
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
