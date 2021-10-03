// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let arr = [];
    for(let i = 0 ; i < this.length; i++)
    {
        if(this[i] === undefined) continue;
        if(callbackFn(this[i], i , this))
            arr.push(this[i])
    }
    return arr;
};


let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ]
  
  let invalidEntries = 0
  
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true
    }
    invalidEntries++
    return false;
  }
  
  let arrByID = arr.myFilter(filterByID)
  
  console.log('Filtered Array\n', arrByID)
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries)
  // Number of Invalid Entries = 5