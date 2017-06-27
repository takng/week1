function obfuscate(pw) {

//Every "a" in the string should be replaced with a "4".
//Every "e" in the string should be replaced with a "3".
//Every "o" (oh) in the string should be replaced with a "0" (zero).
//Every "l" (el) in the string should be replaced with a "1" (one).

  var result = "";
  var target = "";

  if (pw.length === 0) return result;

  for (var i = 0; i < pw.length; i++) {
    target = "";
    if (pw[i] === 'a') {
      target = '4';
    } else if (pw[i] === 'e') {
      target = '3';
    } else if (pw[i] === 'o') {
      target = '0';
    } else if (pw[i] === 'l') {
      target = '1';
    } else {
      target = pw[i];
    }
    result += target;
  }

  return result;
}


var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

var new_pw = obfuscate(myArgs[0]);

// Write your code here...

console.log("Today I learned about " + new_pw + ".");


