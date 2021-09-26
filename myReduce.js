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

if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, initialValue) {
      return this.myReduce(function(mappedArray, currentValue, currentIndex, array) {
        mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
        return mappedArray
      }, [])
    }
  }
  
 console.log( [1, 2, , 3].mapUsingReduce(
    (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
  )) // [5, 7, , 10]
