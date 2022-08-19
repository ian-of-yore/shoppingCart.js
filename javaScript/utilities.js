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
    const totalCaseCost = phoneCaseQuantity * 59;
    const caseElement = document.getElementById("case-cost");
    return caseElement.innerText = totalCaseCost;
}

// Phone Price based on the quantity
function phonePrice(phoneQuantity) {
    const totalPhoneCost = phoneQuantity * 1219;
    const phoneElement = document.getElementById("phone-cost");
    return phoneElement.innerText = totalPhoneCost;
}

// total shopping price calculation
function totalPrice() {
    const totalPhonePrice = document.getElementById("phone-cost");
    const totalPhonePriceString = totalPhonePrice.innerText;
    const totalPhonePriceInt = parseInt(totalPhonePriceString);

    const totalCasePrice = document.getElementById("case-cost");
    const totalCasePriceString = totalCasePrice.innerText;
    const totalCasePriceInt = parseInt(totalCasePriceString);

    const totalShoppingPrice = totalPhonePriceInt + totalCasePriceInt;

    // getting the sub-total id
    const subTotalElement = document.getElementById("sub-total");
    return subTotalElement.innerText = totalShoppingPrice;

}
