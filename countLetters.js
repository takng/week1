function count(str) {
  var noSpaces = str.split(" ").join("");
  var result = {};

  for (i=0; i < noSpaces.length; i++)  {
    var letter = noSpaces[i];

    result[letter] = (result[letter] || 0) + 1;
  }

  return result;
}

var myArgs = process.argv.slice(2);

console.log(count(myArgs[0]));
