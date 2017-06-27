function loopyLighthouse(range, multiples, words) {
  var outWords = '';
  for (var i = range[0]; i <= range[1]; i++) {
    outWords = '';
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      outWords = words[0] + words[1];
    } else
    if (i % multiples[0] === 0) {
      outWords = words[0];
    } else
    if (i % multiples[1] === 0) {
      outWords = words[1];
    } else {
      outWords = i;
    }
    console.log(outWords);
  }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

