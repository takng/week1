var args = process.argv.slice(2);  
function rollDice() {     
  var result;

  result = parseInt(((10 * Math.random()) % 6 ) + 1); 
  return result;
} 

for(var i = 0 ; i < args[0] ; i++) {     
  console.log(rollDice()); 
}
