/* 
polyfill for bind method
*/

let n = {
  firstName: "John",
  lastName: "S",
};

function printDetails() {
  console.log(this.firstName + " " + this.lastName);
}

// let printName = printDetails.bind(n);
// printName();

Function.prototype.mybind = function (...args) {
  let fn = this;
  let params = args.slice(1);
  return function (...args2) {
    fn.apply(args[0], [...params, ...args2]);
  };
};

let printName = printDetails.mybind(n)();
