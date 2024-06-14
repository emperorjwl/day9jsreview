let readline = require("readline-sync");
let fn;
let sn;
let result;

fn = Math.ceil(Math.random() * 10);
sn = Math.ceil(Math.random() * 10);
result = fn + sn;

let ans = readline.questionInt(`What is ${fn} + ${sn} ? `);

if (result == ans) {
  console.log("Correct! Good job.");
} else {
  console.log("That's wrong. It's", result);
}
