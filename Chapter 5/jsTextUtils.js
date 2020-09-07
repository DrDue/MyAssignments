'use strict'
const s = prompt('Tilføj det ord du vil finde første, sidste og midten af');

function first(s) {
  console.log('this is the first letter in my string: ' + s.charAt(0));
  document.write('this is the first letter in my string: ' + s.charAt(0) + '<br>');
}
first(s);

function last(s) {
  console.log('this is the last letter in my string: ' + s[s.length - 1]);
  document.write('this is the last letter in my string: ' + s[s.length - 1] + '<br>');
}
last(s);

function middle(s) {
  console.log('this is the middle letters in my string: ' + s.substring(1, s.length - 1));
  document.write('this is the middle letters in my string: ' + s.substring(1, s.length - 1) + '<br>');
}
middle(s);
