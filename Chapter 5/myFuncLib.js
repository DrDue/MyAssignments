'use strict';

function play() {
  let x = Math.random();
  x = Math.floor(x * 6 + 1);
  return x;
}

function fahr() {
  var f = prompt("enter the value of fahrenheit", "fahrenheit");
  var c = 5 / 9 * (f - 32);
  var z = c.toFixed(1);
  document.write(`${f} &deg;F = ${z} &deg;C`);
  console.log(`${f} &deg;F = ${z} &deg;C`);
}

function cel() {
  var c = prompt("enter the value of celsius", "celsius");
  var f = (c * 9 / 5) + 32;
  var z = f.toFixed(1);
  document.write(`${c} &deg;F = ${z} &deg;C`);
  console.log(`${c} &deg;F = ${z} &deg;C`);
}
