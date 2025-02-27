const findTheOldest = function(array) {
    let index = undefined;
    array.reduce(function(highest, current, place){
        if (current.yearOfDeath === undefined){
            if (highest < (new Date().getFullYear() - current.yearOfBirth)){
                highest = new Date().getFullYear() - current.yearOfBirth;
                index = place;
            }
        }
        if (highest < (current.yearOfDeath - current.yearOfBirth)){
            highest = current.yearOfDeath - current.yearOfBirth;
            index = place;
        }
        return highest;
    }, 0);
    return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;
