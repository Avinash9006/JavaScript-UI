/* Higher Order Function - > Passing function as an arguement and returning a function 
Calculate area,diameter,circumference  etc of the circle*/
const radius = [1, 2, 5, 60];
const area = function (radius) {
  return Number((Math.PI * radius * radius).toFixed(2));
};
const circumference = function (radius) {
  return Number((2 * Math.PI * radius).toFixed(2));
};
const diameter = function (radius) {
  return 2 * radius;
};

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));
