var output = sumArgs(process.argv);

console.log(output);

function sumArgs(argvArray){
  var sum = 0;

  for ( var i = 2; i < argvArray.length; i++ ) {
    sum += parseInt(argvArray[i]);
  }

  return sum;
}
