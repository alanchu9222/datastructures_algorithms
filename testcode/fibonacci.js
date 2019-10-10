/*
Return the fibonacci number for index position x 
*/

fib = x => {
  //  console.log("x = " + x);
  // Base condition
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }

  return fib(x - 1) + fib(x - 2);
};
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
