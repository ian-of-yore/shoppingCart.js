
// _______________Phone Quantity____________________

// Case amount increases as Plus button is clicked
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    let totalPhoneQuantity = quantityUpdateButton("phone-number-field", true);
    phonePrice(totalPhoneQuantity);
})

// case amoount decreases as Minus button is clicked
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    let totalPhoneQuantity = quantityUpdateButton("phone-number-field", false);
    phonePrice(totalPhoneQuantity);
})