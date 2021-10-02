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

arr = [1,2,3];
console.log(arr.myPush(4));
console.log(arr)