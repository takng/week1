var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

if (Number.isNaN(myArgs[0]) || Number.isNaN(myArgs[1])) {
  console.log("Not a Number.");
}

console.log(Number(myArgs[0]) + Number(myArgs[1]));
