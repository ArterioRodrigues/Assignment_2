// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0 ; i < this.length; i++)
    {
        if(this[i] === undefined) continue;
        if (false === callbackFn(this[i], i , this))
            return false;
    }
    return true;
};

function isBigEnough(element, index, array) {
    return element >= 10;
  }
  console.log([12, 5, 8, 130, 44].myEvery(isBigEnough));   // false
  console.log([12, 54, 18, 130, 44].myEvery(isBigEnough));