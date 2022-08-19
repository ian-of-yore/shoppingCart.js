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
function getTextElementValueById(input) {
    const objectValue = document.getElementById(input);
    const objectValueString = objectValue.innerText;
    return objectValueInt = parseInt(objectValueString);
}

// function to set a value as innerText of an element
function setValueToTextElementbyId(elementId, value) {
    const element = document.getElementById(elementId);
    return element.innerText = value;
}


// total shopping price calculation
function checkoutPrice() {
    const totalPhonePriceInt = getTextElementValueById("phone-cost");
    const totalCasePriceInt = getTextElementValueById("case-cost");
    const totalShoppingPrice = totalPhonePriceInt + totalCasePriceInt;

    // sub-total 
    setValueToTextElementbyId("sub-total", totalShoppingPrice);

    // tax-amount
    const taxAmount = 0.1; // 10% tax
    const totalTaxString = (totalShoppingPrice * taxAmount).toFixed(2);
    const totalTax = parseFloat(totalTaxString);
    setValueToTextElementbyId("tax-amount", totalTax);

    // Final amount to be paid
    const finalAmount = totalShoppingPrice + totalTax;
    setValueToTextElementbyId("final-amount", finalAmount);
}

