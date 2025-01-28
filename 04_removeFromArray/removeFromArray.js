const removeFromArray = function() {
    let baseArray = arguments[0];
    let searchValues = [];
    for (var i = 1; i < arguments.length; i++){
        searchValues.push(arguments[i]);
    }
    for (let i =0; i<searchValues.length; i++){
        for (let j=0; j<baseArray.length; j++){
            if (searchValues[i]===baseArray[j]){
                baseArray.splice(j,1);
                j--;
            }
        }
    }
    return baseArray;
};

// Do not edit below this line
module.exports = removeFromArray;
