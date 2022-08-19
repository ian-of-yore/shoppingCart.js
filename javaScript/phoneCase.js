caseBasePrice = 50;

// Case amount increases as Plus button is clicked
document.getElementById("btn-case-plus").addEventListener("click", function () {
    let totalCaseQuantity = quantityUpdateButton("case-number-field", true);
    objectTotalPrice("case-cost", caseBasePrice, totalCaseQuantity);
    checkoutPrice();
})

// case amoount decreases as Minus button is clicked
document.getElementById("btn-case-minus").addEventListener("click", function () {
    let totalCaseQuantity = quantityUpdateButton("case-number-field", false);
    objectTotalPrice("case-cost", caseBasePrice, totalCaseQuantity);
    checkoutPrice();
})
