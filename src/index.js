module.exports = function toReadable(number) {
    const readNumber1 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };
    const readNumber11 = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    };
    const readNumber20 = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };
    numberString = number.toString();
    if (number === 0) {
        return 'zero';
    } else if (number < 10) {
        return readNumber1[number];
    } else if (number < 20 && number >= 10) {
        return readNumber11[numberString[1]];
    } else if (number < 100 && number >= 20) {
        if (numberString[1] === '0') {
            return (readNumber20[numberString[0]]);
        } else {
            return (readNumber20[numberString[0]] + ' ' + readNumber1[numberString[1]]);
        }
    } else if (number < 1000 && number >= 100) {
        if (numberString[2] === '0' && numberString[1] === '0') {
            return (readNumber1[numberString[0]] + ' ' + 'hundred');
        } else if (numberString[1] === '0') {
            return (readNumber1[numberString[0]] + ' ' + 'hundred' + ' ' + readNumber1[numberString[2]]);
        } else if (numberString[1] === '1') {
            return (readNumber1[numberString[0]] + ' ' + 'hundred' + ' ' + readNumber11[numberString[2]]);
        } else if (numberString[2] === '0') {
            return (readNumber1[numberString[0]] + ' ' + 'hundred' + ' ' + readNumber20[numberString[1]]);
        } else {
            return (readNumber1[numberString[0]] + ' ' + 'hundred' + ' ' + readNumber20[numberString[1]] + ' ' + readNumber1[numberString[2]]);
        }
    }
}
