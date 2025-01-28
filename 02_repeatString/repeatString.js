const repeatString = function(string, num) {
    let builtString="";
    if (num <0) return "ERROR";
    for (let i=0; i < num; i++){
        builtString+=string;
    }
    return builtString;
};

// Do not edit below this line
module.exports = repeatString;
