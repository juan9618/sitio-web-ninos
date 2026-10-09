javascript
"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const productButtons = document.querySelectorAll(".select-button");
    const selectionMessage = document.getElementById("selection-message");

    productButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.dataset.product;

            if (selectionMessage && productName) {
                selectionMessage.textContent =
                    `¡Elegiste ${productName}! Gracias por tu interés.`;

                selectionMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }
        });
    });

    console.log("Pop It website loaded successfully.");
});
