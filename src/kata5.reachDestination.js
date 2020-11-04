const reachDestination = (distance, speed) => {
    var result = distance / speed;
    console.log(result);
    var decimal = (result - parseInt(result, 10));
    console.log(decimal);
    decimal = Math.round(decimal * 10);
    console.log(decimal);
    if (decimal == 5) { 
        var result = (parseInt(result, 10)+0.5);
        console.log(result);
        }
    if (decimal < 3 || decimal > 7) {
        var result = Math.round(result);
        console.log(result);
    } else {
        var result = (parseInt(result, 10)+0.5);
        console.log(result);
    }
return ('I should be there in ' + result + ' hours');
};

module.exports = reachDestination;
