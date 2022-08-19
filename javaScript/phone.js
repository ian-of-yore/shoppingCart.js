// _______________Phone Quantity____________________

// Case amount increases as Plus button is clicked
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    quantityAmountPlusButton("phone-number-field");
})

// case amoount decreases as Minus button is clicked
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    quantityAmountMinusButton("phone-number-field");
})