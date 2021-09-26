// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    let x = this.length - 1;
    
    if(fromIndex != undefined)
    {
        if(fromIndex > 0)
            x = fromIndex;
        else
            x = this.length + fromIndex;
    }

    for(let i = x ; i >= 0; i--)
    {
        if(this[i] === undefined)  
            continue;
        if(this[i] === searchElement)
            return i;  
    }
    return -1;
};

var numbers = [2, 5, 9, 2];
console.log(numbers.myLastIndexOf(2));     // 3
console.log(numbers.myLastIndexOf(7));     // -1
console.log(numbers.myLastIndexOf(2, 3));  // 3
console.log(numbers.myLastIndexOf(2, 2));  // 0
console.log(numbers.myLastIndexOf(2, -2)); // 0
console.log(numbers.myLastIndexOf(2, -1)); // 3