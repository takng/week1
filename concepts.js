/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

function joinList(cList) {
  var result = "";

  if (cList.length === 0) return result;

  for (var i = 0; i < cList.length - 1; i++) {
    result += cList[i] + ', ';
  }

  result += cList[cList.length - 1];

  return result;
}


var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");

