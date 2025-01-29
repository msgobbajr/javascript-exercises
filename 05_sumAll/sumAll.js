const sumAll = function(first, second) {
    let sum=0;
    let intOne = 0;
    let intTwo = 0;
    if (first<second){
        intOne=first;
        intTwo=second;
    }
    else {
        intTwo=first;
        intOne=second;
    }

    if (intOne < 0 || intTwo < 0) return 'ERROR';
    else if (intOne%1!=0 || intTwo%1!=0) return 'ERROR';
    else if (typeof(intOne)!="number" || typeof(intTwo)!="number") return 'ERROR';

    for (;intOne<=intTwo;intOne++){
        sum+=intOne;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
