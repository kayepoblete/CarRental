// page 87
"use strict";

window.onload = init;

function init() {
    const totalBtn = document.getElementById("totalBtn");
    totalBtn.onclick = onBtnEstimateTotalCost;
}

function onBtnEstimateTotalCost() {
    const basicCost = 29.99;
    const numDay = document.getElementById("inputNumDays").value;
    const carRentalCost = basicCost * numDay;
    document.getElementById("carRentalTotalMessage").textContent = `Car rental: ${carRentalCost.toFixed(2)}`;

    // loops and check if checkbox is checked
    const optionSelect = document.getElementsByName("options");
    let optionCost = 0;
    for (let i = 0; i < 3; i++) {
        if (optionSelect[i].checked) {
            optionCost += Number(optionSelect[i].value);
        }
    }
    let totalOptionCost = optionCost * numDay;
    document.getElementById("optionsMessage").textContent = `Options: ${totalOptionCost.toFixed(2)}`;

    // radio buttons check
    const radioSelect = document.querySelector("input[name='under25Check']:checked");
    let surcharge = 0;
    if (radioSelect.value == "yesRadio") {
        surcharge = 0.3;
    }
    if (radioSelect.value == "noRadio") {
        surcharge = 0;
    }
    let newCarRentalCost = (carRentalCost * surcharge) + carRentalCost;
    document.getElementById("under25Message").textContent = `Under 25 surcharge: ${newCarRentalCost.toFixed(2)}`;

    // add total of all cost and display
    let totalDue = totalOptionCost + newCarRentalCost;
    document.getElementById("totalDueMessage").textContent = `Total due: ${totalDue.toFixed(2)}`;
}