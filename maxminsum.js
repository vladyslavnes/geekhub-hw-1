function maxminsum (argArr) {
  var arr = argArr; // for function not to affect the real array

  // filter all 'bad' values
  for (var i = 0; i < arr.length; i++) {
    if (
        typeof arr[i] === 'undefined' ||
        typeof arr[i] === 'string' ||
        isNaN(arr[i])
    )
    // if number is neither integer nor float
      arr.splice(i,1);
  }

  var sum = 0,
      max = arr[0],
      min = arr[0];
  
  // now we have an array of just numbers (and Infinity)
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; // increase sum

    // find the greatest number
    if (arr[i] > max)
      max = arr[i];
  
    // filter the least number
    if (arr[i] < min)
      min = arr[i];
  }

  return {
    max,
    min,
    sum
  };
}

// test

var test = [undefined,-2,'1.2a',-1,1.2,Infinity,true,false,NaN],
    nums = maxminsum(test);

console.log(`
Max number: ${nums.max}
Min Number: ${nums.min}
Sum of all numbers: ${nums.sum}`);
