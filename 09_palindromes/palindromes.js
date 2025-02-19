const palindromes = function (str) {
    str = str.replaceAll(' ','');
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.toLowerCase();
    let a = 0;
    let b = str.length-1;
    while (a!=b && a<b){
        if(str[a]!=str[b]){
            return false;
        }
        a++;
        b--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
