// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0 ; i < this.length; i++)
    {
        if(this[i] === undefined) continue;

        callbackFn(this[i], i , this)
    }
};

const arr = [1,2,3];
console.log("myEach: ");
arr.myEach( x => console.log(x * 2));