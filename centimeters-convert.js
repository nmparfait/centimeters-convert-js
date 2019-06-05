// 1 inch === 2.54cm
// 1foot === 12 inches

function toCm(feet, inches) {
    if((feet<0) || (inches<0)){
        alert('invalid parameters')
        return;
    }

    let centimeters = (feet*12*2.54);
    centimeters += inches *2.54;

    console.log(`${feet} feet and ${inches} inches is equal to ${centimeters} cm`)
    return centimeters.toFixed(2);

}

toCm(12,3);
toCm(-1,35);