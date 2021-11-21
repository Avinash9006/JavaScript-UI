// function curry(func, arity = func.length) {
//   console.log(func.length)
//   return function (...args) {
//     if (args.length >= arity) {
//       return func(...args);
//     } else {
//       return curry(func.bind(this, ...args), arity - args.length);
//     }
//   };
// }

// const multiply = curry((a, b, c) => a * b * c);
// console.log(multiply(2, 3,5)(3))
function curry(fn) {
  values = fn.apply(this, arguments);
  return function (...args) {
    return values;
  };
}

const multiply = curry(function m1(...arg) {
  let args = arguments;
  let res = 1;
  for (let key in args) {
    res = res * args[key];
  }
  return res;
});
console.log(multiply(1, 2, 3, 5));

// console.log(multiply(2)(3, 4));
// console.log(multiply(2)(3)(4));
// console.log(multiply(2, 3, 4));
