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


const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.grabKeys(object1));

const arr = ['a', 'b', 'c'];
console.log(Object.grabKeys(arr));

const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.grabKeys(obj));