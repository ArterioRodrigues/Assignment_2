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

// PUSH //
Array.prototype.myPush = function(...elements) {
    let elements_i = 0;
    let length = this.length;
    
    for(i = length; i < length + elements.length; i++){
        this[i] = elements[elements_i];
        elements_i++;
    }
        

    return this.length;
};

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

// KEYS //
Object.grabKeys = function(object) {
    let arr = [];
    let i = 0;
    for(const property in object)
    {
        arr[i] = property;
        i++;
    }
    
    return arr;
};

// VALUES //
Object.grabValues = function() {

};