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


// Calulating object total price based on object quantity
function objectTotalPrice(objectId, basePrice, quantity) {
    const totalCost = basePrice * quantity;
    const objectElement = document.getElementById(objectId);
    return objectElement.innerText = totalCost;
}


// function to convert the innerText to an integer value
function innerTextToString(input) {
    const objectValue = document.getElementById(input);
    const objectValueString = objectValue.innerText;
    return objectValueInt = parseInt(objectValueString);
}

// total shopping price calculation
function subTotalPrice() {
    const totalPhonePriceInt = innerTextToString("phone-cost");
    const totalCasePriceInt = innerTextToString("case-cost");
    const totalShoppingPrice = totalPhonePriceInt + totalCasePriceInt;

    // getting the sub-total id
    const subTotalElement = document.getElementById("sub-total");
    return subTotalElement.innerText = totalShoppingPrice;
}
