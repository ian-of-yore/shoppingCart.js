// Updating the quantaty plus/minus button
function quantityUpdateButton(objectId, isIncreasing) {
    const objectPreviousValue = document.getElementById(objectId);
    const objectPreviousValueString = objectPreviousValue.value;
    const objectPreviousValueInt = parseInt(objectPreviousValueString);

    if (isIncreasing === true) {
        return objectPreviousValue.value = objectPreviousValueInt + 1;
    }

    else {
        if (objectPreviousValueInt === 0) return;
        return objectPreviousValue.value = objectPreviousValueInt - 1;
    }
}


// phoneCase Price based on the quantity
function phoneCasePrice(phoneCaseQuantity) {
    const totalCaseCost = phoneCaseQuantity * 50;
    const caseElement = document.getElementById("case-cost");
    return caseElement.innerText = totalCaseCost;
}

// Phone Price based on the quantity
function phonePrice(phoneQuantity) {
    const totalPhoneCost = phoneQuantity * 1000;
    const phoneElement = document.getElementById("phone-cost");
    return phoneElement.innerText = totalPhoneCost;
}

// function to convert the innerText to an integer value
function innerTextToString(input) {
    const objectValue = document.getElementById(input);
    const objectValueString = objectValue.innerText;
    return objectValueInt = parseInt(objectValueString);
}

// total shopping price calculation
function totalPrice() { 
    const totalPhonePriceInt = innerTextToString("phone-cost");
    const totalCasePriceInt = innerTextToString("case-cost");
    const totalShoppingPrice = totalPhonePriceInt + totalCasePriceInt;

    // getting the sub-total id
    const subTotalElement = document.getElementById("sub-total");
    return subTotalElement.innerText = totalShoppingPrice;

}
