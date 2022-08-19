const phoneBasePrice = 1000;

// Phone amount increases as Plus button is clicked
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    let totalPhoneQuantity = quantityUpdateButton("phone-number-field", true);
    objectTotalPrice("phone-cost", phoneBasePrice, totalPhoneQuantity);
    checkoutPrice();
})

// Phone amoount decreases as Minus button is clicked
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    let totalPhoneQuantity = quantityUpdateButton("phone-number-field", false);
    objectTotalPrice("phone-cost", phoneBasePrice, totalPhoneQuantity);
    checkoutPrice();
})