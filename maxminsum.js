function maxminsum (argArr) {
  var arr = argArr; // for function not to affect the real array

  // filter all 'bad' values
  for (var i in arr) {
    if (typeof arr[i] === 'undefined')
      arr[i] = NaN;
    if (!(Number.isInteger(arr[i]) || Number.isInteger(Math.round(arr[i]))) // if number is neither integer nor float
      alert(arr.splice(i,1));
  }

  var sum = 0,
      max = arr[0],
      min = arr[0];

  for (var i in arr) {
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

var test = [undefined,-2,-1];
console.log(`
Max number: ${maxminsum(test).max}
Min Number: ${maxminsum(test).min}
Sum of all numbers: ${maxminsum(test).sum}`);
