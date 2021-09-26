// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex) {
    let x = 0;
    
    if(fromIndex != undefined)
    {
        if(fromIndex > 0)
            x = fromIndex;
        else
            x = this.length + fromIndex;
    }

    for(let i = x ; i < this.length; i++)
    {
        if(this[i] === undefined)  
            continue;
        if(this[i] === searchElement)
            return true;
        
    }
    return false;
};

console.log([1, 2, 3].myIncludes(2))        // true
console.log([1, 2, 3].myIncludes(4) )       // false
console.log([1, 2, 3].myIncludes(3, 3)      )// false
console.log([1, 2, 3].myIncludes(3, -1)     )// true
console.log([1, 2, NaN].myIncludes(NaN)    ) // true
console.log(["1", "2", "3"].myIncludes(3) )  // false