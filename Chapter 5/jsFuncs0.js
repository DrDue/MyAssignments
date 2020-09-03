'use strict'

function addVat(money) {
  money = prompt("Amount of money");
  let a = money * 1.25;
  document.write(`Amount of money with Vat ${a}kr. <br>`);
  return a;
}

function subVat(money) {
  money = prompt("Amount of money");
  let a = money * 0.75;
  document.write(`Amount of money without Vat ${a}kr. <br>`);
  return a;
}

function calcVat(money) {
  money = prompt("Amount of money");
  let a = money * 0.25;
  document.write(`Amount of money of Vat ${a}kr. <br>`);
  return a;
}
