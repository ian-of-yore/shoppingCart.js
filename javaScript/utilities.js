// quantity increases as the Plus Button is clicked 
function quantityAmountPlusButton(objectId) {
    const objectPreviousValue = document.getElementById(objectId);
    const objectPreviousValueString = objectPreviousValue.value;
    const objectPreviousValueInt = parseInt(objectPreviousValueString);
    return objectPreviousValue.value = objectPreviousValueInt + 1;
}

// quantity decreases as the Minus Button is clicked
function quantityAmountMinusButton(objectId) {
    const objectPreviousValue = document.getElementById(objectId);
    const objectPreviousValueString = objectPreviousValue.value;
    const objectPreviousValueInt = parseInt(objectPreviousValueString);
    if (objectPreviousValueInt === 0) return;
    return objectPreviousValue.value = objectPreviousValueInt - 1;
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