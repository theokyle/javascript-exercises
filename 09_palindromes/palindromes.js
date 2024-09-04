const palindromes = function (string) {
    const letter = "abcdefghijklmnopqrstuvwxyz123456789";
    const cleanString = string
        .toLowerCase()
        .split('')
        .filter((character) => letter.includes(character))
        .join('');

    const reverseString = cleanString.split('').reverse().join('');
    if (reverseString === cleanString) {
        return true;
    }
    else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
