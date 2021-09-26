// SOME //
Array.prototype.mySome = function(callbackFn) {
    for(let i = 0 ; i < this.length; i++)
    {
        if(this[i] === undefined) continue;
        if (true === callbackFn(this[i], i , this))
            return true;
    }
    return false;
};

const array = [13,,2];
// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.mySome(even));