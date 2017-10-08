function maxminsum (arr) {
  var max = 0,
      min = 0,
      sum = 0;
  for (var i = 0;i < arr.length;i++) {
    if (typeof arr[i] === 'number' && !(isNaN(arr[i]))) { // check if this element is a number (and not NaN)
      sum += arr[i];
      
      if (arr[i] > max) // is given number bigger than previous max?
        max = arr[i];
      
      if (arr[i] < min) // is given number less than previous min?
        min = arr[i];
    }
  }
  return {max,min,sum}; //ES6 stuff (instead of {max:max,min:min,sum:sum})
}

// test

var test = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
console.log(`
Max number: ${maxminsum(test).max}
Min Number: ${maxminsum(test).min}
Sum of all numbers: ${maxminsum(test).sum}`);
