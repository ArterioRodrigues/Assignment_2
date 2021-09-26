// MAP //
Array.prototype.myMap = function(callbackFn) {
    let arr = [];

    for(let i = 0 ; i < this.length; i++)
    {
        if(this[i] === undefined) continue;

       arr.push(callbackFn(this[i], i , this));
    }

    return arr;
};
 
let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.myMap(function(num, index) {
  if (index < 3) {
     return num
  }
})

console.log(filteredNumbers);