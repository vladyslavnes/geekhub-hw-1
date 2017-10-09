function maxminsum (argArr) {
  var arr = argArr, // for function not to affect the real array
      sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) || arr[i].toString().indexOf('.') != -1) { // if number is either integer or float
      sum += arr[i]; // increase sum
    }
    else arr.splice(i,1); // otherwise, remove element from array
  }
  console.log(arr);
  
  var max = Math.max.apply(Math,arr),
      min = Math.min.apply(Math,arr);

  return {
    max,
    min,
    sum
  };
}

// test

var test = [undefined,-2,-1];
console.log(`
Max number: ${maxminsum(test).max}
Min Number: ${maxminsum(test).min}
Sum of all numbers: ${maxminsum(test).sum}`);
