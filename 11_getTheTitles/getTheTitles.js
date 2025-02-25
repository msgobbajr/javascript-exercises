const getTheTitles = function(books) {
    let returnArray = [];
    books.forEach(function(item,index,array){
        returnArray.push(item.title);
    });
    return returnArray;
};

// Do not edit below this line
module.exports = getTheTitles;