// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let arr = [];
    for(let i = 0 ; i < this.length; i++)
    {
        if(this[i] === undefined) continue;
        arr.push(callbackFn(this[i], i , this));
    }
    return arr;
};

function isBigEnough(value) {
    return value >= 10
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)

console.log(filtered);