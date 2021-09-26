// PUSH //
Array.prototype.myPush = function(...elements) {
    
    for(i = 0; i < elements.length; i++)
        this.push(elements[i]);

    return this.length;
};  

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.myPush('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.myPush('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]