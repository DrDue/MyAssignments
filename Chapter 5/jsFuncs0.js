'use strict'

function addVat(money) {
  money = prompt("Amount of money");
  let a = money * 1.25;
  document.write(`Amount of money with Vat ${a}kr. <br>`);
  return a;
}
/*
const VAT = 25;

const addVat = function(a) {
    return a * (1 + VAT / 100);
}
 */
function subVat(money) {
  money = prompt("Amount of money");
  let a = money * 0.75;
  document.write(`Amount of money without Vat ${a}kr. <br>`);
  return a;
}
/*
const subVat = function(a) {
    return a / (1 + VAT / 100);
}
*/
function calcVat(money) {
  money = prompt("Amount of money");
  let a = money * 0.25;
  document.write(`Amount of money of Vat ${a}kr. <br>`);
  return a;
}
/*
const calcVat = function(a) {
    return a - subVat(a);
}
*/
