'use strict';
let heads = 0;
let tails = 0;

function coinToss(numTimes) {
  for (var i = 0; i < numTimes; i++) {
    var coin = Math.floor(Math.random() * 10);
    var even = (coin % 2 === 0);
    if (even == true) {
      heads++;
    } else {
      tails++;
    }
    console.log("The coin was " + (even ? "heads " : " tails"));
    document.write("The coin was " + (even ? "heads " + "<br>" : " tails" + "<br>"))
  }
  document.write("<br>" + "total of heads: " + heads + "<br>");
  document.write("total of tails " + tails);
}
coinToss(10);
// let tails = 0;
// let heads = 0;
// let flip;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// flip = Math.random();
// flip = Math.floor(flip * 2 + 1);
// if (flip === 1)
//   tails++;
// else
//   heads++;
//
// document.write('heads: ' + heads + "<br>");
// document.write('tails: ' + tails + '<br>');
// document.write('yo waddup Niels, det er jo ez piz' + '<br>');
