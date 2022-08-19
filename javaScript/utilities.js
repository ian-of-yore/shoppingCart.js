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