
// this concept is needed to be used there when
const list = [1,2,3,4,5,6,7,8]
function between(start, end) {
    return function (value,index) {
      return value>start && value<end
    }
  }
const filteredArray = list.filter(between(3, 10)) // [4,5]
console.log(filteredArray)