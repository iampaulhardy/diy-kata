const humanCatDogYears = number => {
    var array = [];
    var firstCatYear = 15;
    var firstDogYear = 15;
    var secondCatYear = 9;
    var secondDogYear = 9;
    var subsequentCatYear = 4;
    var subsequentDogYear = 5;

    array.push(number);
    if (number === 1) 
        {
        array.push(firstCatYear);
        array.push(firstDogYear);
        }
    else if (number === 2) {
        array.push(firstCatYear + secondCatYear);
        array.push(firstDogYear + secondDogYear);
        } 
    else if (number > 2) {
        array.push(firstCatYear + secondCatYear + (subsequentCatYear * (number - 2)));
        array.push(firstDogYear + secondDogYear + (subsequentDogYear * (number - 2)));
        console.log(array);
        }
    return array;
};

module.exports = humanCatDogYears;
