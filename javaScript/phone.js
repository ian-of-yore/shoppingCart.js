// _______________Phone Quantity____________________

// Case amount increases as Plus button is clicked
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    let totalPhoneQuantity = quantityAmountPlusButton("phone-number-field");
    const totalPhoneCost = totalPhoneQuantity * 1219;

    const phoneElement = document.getElementById("phone-cost");
    return phoneElement.innerText = totalPhoneCost;
})

// case amoount decreases as Minus button is clicked
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    let totalPhoneQuantity = quantityAmountMinusButton("phone-number-field");
    const totalPhoneCost = totalPhoneQuantity * 1219;

    const phoneElement = document.getElementById("phone-cost");
    return phoneElement.innerText = totalPhoneCost;
})