let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let s = a.reduce((acc, b) => acc = acc + b, 0);
// console.log(s)

Array.prototype.myReduce = function (callback, initial) {
  let arr = this;
  let res = initial ? initial : arr[0];
  //   let i = (initial = !undefined ? 1 : 0);
  for (let i = 0; i < arr.length; i++) {
    res = callback.call(this, res, arr[i]);
  }
  return res;
};
console.log(
  a.myReduce((acc, b) => {
    acc[b] = b;
    return acc;
  }, {})
);