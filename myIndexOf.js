// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
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
            return i;
        
    }
    return -1;
};

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.myIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.myIndexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
