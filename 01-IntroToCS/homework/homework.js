"use strict";

function BinarioADecimal(num) {
  let count = 0, sumNumbers = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    sumNumbers += Number(num[i]) * Math.pow(2, count);
    count++;
  }
  return sumNumbers;
}

function DecimalABinario(num) {
  let array = [];
  while (num > 0) {
    if (num % 2 === 0) {
      array.unshift(0);
      num = Math.floor(num / 2);
    } else {
      array.unshift(1);
      num = Math.floor(num / 2);
    }
  }
  return array.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
