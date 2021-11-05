/* 
closure - > a function along with its outer environment together forms a closure object
In other word - > it is a combination of of a function and its lexical scope.
Even it is executed in other scope, It still remember its outer environment(its lexical scope)

Advantage  -> encapsulation, memoisation etc.
Disadvantage -> memory consumption(leak)
*/

function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

 outer()();

