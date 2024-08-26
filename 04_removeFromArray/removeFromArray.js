const removeFromArray = function(array, number) {
    let newArray = [];
    for (i=0; i<array.length; i++) {
        if (array[i] != number) {
           newArray.push(array[i]);
        }
    }
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
