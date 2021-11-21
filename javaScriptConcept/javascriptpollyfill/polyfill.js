/// polyfill for reduce
Array.prototype.myReduce = function (fn, initial) {
  let values = this;
  for (let i = 0; i < values.length; i++) {
    initial = initial ? fn(initial, values[i]) : values[0];
  }
  return initial;
};
// polyfill for ForEach
Array.prototype.forEachMine = function (fn) {
  let values = this;
  for (let i = 0; i < values.length; i++) {
    fn(values[i], i, values);
  }
};

// pollyfill for map function
Array.prototype.myMap = function (fn) {
  let values = this;
  let newArray = [];
  for (let i = 0; i < values.length; i++) {
    newArray.push(fn(values[i], i, values));
  }
  return newArray;
};

// polyfill for filter

Array.prototype.myFilter = function (fn) {
  let values = this;
  let newArray = [];
  for (let i = 0; i < values.length; i++) {
    if (fn(values[i], i, values)) newArray.push(values[i]);
  }
  return newArray;
};

// let ar = [1,2,3,4,5,6,7,8]
// console.log(ar.myFilter((a)=>a<5 ? true : false))
// console.log(ar.myMap((a)=>a<5 ? true : false))
// console.log(ar.myFilter((a)=>a<5 ? true : false))

//polyfill call ,bind, apply and how it works

let car = {
  brand: "Audi",
  name: "mycar",
  displayDetails: function (ownerName) {
    console.log(
      `The Vehical name is ${this.name} of ${this.brand} belongs to ${ownerName}`
    );
  },
};
// copyFunction = car.displayDetails;
// // this won’t work as the “this” will be now assigned to the global context
// copyFunction("Avinash");
// // to make it work with
// copyFunctionwithBind = car.displayDetails.bind(car, "Avinash");
// copyFunctionwithBind();

let bike = {
  name: "pulser",
  brand: "Hero",
};

// car.displayDetails.apply(bike,['Avinash'])
// car.displayDetails.call(bike,['Avinash'])
// car.displayDetails.call(bike,'Avinash')
// car.displayDetails.bind(bike,'Avinash')()


// polyfill for apply
Function.prototype.myApply = function(){
    arguments[0].fn = this;
    arguments[0].fn(...arguments[1]);
}
// car.displayDetails.myApply(bike,['Avinash'])

// polyfill for bind
Function.prototype.myBind = function(){
    let fn = this;
    let bindObj = arguments[0]
    let args = [].slice.call(arguments,1); // for arguments
    return function(){
        fn.apply(bindObj, args.concat([].slice.call(args)))
    }
}
// car.displayDetails.myBind(bike,'Ashutosh','Avinash')()