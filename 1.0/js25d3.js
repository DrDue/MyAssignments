'use strict';
document.write('Truth table for Disjunction' + '<br>');
document.write('var1\tvar2\tvar3\tvar1 || var2 || var3' + '<br>');
console.log('Truth table for Disjuncti||');
console.log('var1\tvar2\tvar3\tvar1 || var2 || var3');
var var1 = true;
var var2 = true;
var var3 = true;
document.write(true + '\t' + true + '\t' + true + '\t' + (var1 || var2 || var3) + "<br>");
document.write(true + '\t' + true + '\t' + false + '\t' + (var1 || var2 || !var3) + "<br>");
document.write(true + '\t' + false + '\t' + true + '\t' + (var1 || !var2 || var3) + "<br>");
document.write(false + '\t' + true + '\t' + true + '\t' + (!var1 || var2 || var3) + "<br>");
document.write(false + '\t' + true + '\t' + false + '\t' + (!var1 || var2 || !var3) + "<br>");
document.write(false + '\t' + true + '\t' + true + '\t' + (!var1 || !var2 || var3) + "<br>");
document.write(false + '\t' + false + '\t' + false + '\t' + (!var1 || !var2 || !var3) + "<br>");
console.log(true + '\t' + true + '\t' + true + '\t' + (var1 || var2 || var3));
console.log(true + '\t' + true + '\t' + false + '\t' + (var1 || var2 || !var3));
console.log(true + '\t' + false + '\t' + true + '\t' + (var1 || !var2 || var3));
console.log(false + '\t' + true + '\t' + true + '\t' + (!var1 || var2 || var3));
console.log(false + '\t' + true + '\t' + false + '\t' + (!var1 || var2 || !var3));
console.log(false + '\t' + true + '\t' + true + '\t' + (!var1 || !var2 || var3));
console.log(false + '\t' + false + '\t' + false + '\t' + (!var1 || !var2 && !var3));