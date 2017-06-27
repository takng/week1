function reverse(pw) {

  console.log(pw);
  var result = "";

  if (pw.length === 0) return result;

  for (var i = pw.length - 1; i >= 0; i--) {
    result += pw[i];
  }

  return result;
}


var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

for (var j = 0; j < myArgs.length; j++) {
  console.log(reverse(myArgs[j]));
}



