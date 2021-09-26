// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0 ; i < this.length; i++)
    {
        if(this[i] === undefined) continue;
        callbackFn(this[i], i , this);
    }
};

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

// REDUCE //
Array.prototype.myReduce = function(callbackFn, inital_value){
    let x;

    if(inital_value != undefined)
        x = inital_value;

    for(let i = 0 ; i < this.length; i++)
    {
        if(this[i] === undefined) continue;

        if(inital_value === undefined)
        {
            if(i === 0)
            {
                x = this[i];
                continue; 
            }
            else
                x = callbackFn(x, this[i], i, this); 
        }
        else  
            x = callbackFn(x, this[i], i, this);
    }
    return x;
};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};