const numberToReversedDigits = number => {
    var digits = (""+number).split("");
    digits.reverse();
    for (i = 0; i < digits.length; i++) {
        digits[i] = +digits[i];
    }
    return digits;
}
module.exports = numberToReversedDigits;
