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

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 49, 29, 10, 13];

console.log(array1.myEvery(isBelowThreshold));