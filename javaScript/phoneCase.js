
// Case amount increases as Plus button is clicked
document.getElementById("btn-case-plus").addEventListener("click", function () {
    // let totalCaseQuantity = quantityAmountPlusButton("case-number-field");
    let totalCaseQuantity = quantityUpdateButton("case-number-field", true);
    phoneCasePrice(totalCaseQuantity);

})

// case amoount decreases as Minus button is clicked
document.getElementById("btn-case-minus").addEventListener("click", function () {
    // let totalCaseQuantity = quantityAmountMinusButton("case-number-field");
    let totalCaseQuantity = quantityUpdateButton("case-number-field", false);
    phoneCasePrice(totalCaseQuantity);
})



