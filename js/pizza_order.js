
function order() {

    var sizeCost;
    var meatCost;
    var vegetableCost;
    var cheeseCost = 0;
    var sauceCost = 0;
    var crustCost = 0;
    var totalCost = 0;
    var meatList = "";
    var vegetableList = "";

    // Determine which radio buttons are selected
    var sizeSelection = document.querySelector('input[name="size"]:checked').value;
    var cheeseSelection = document.querySelector('input[name="cheese"]:checked').value;
    var sauceSelection = document.querySelector('input[name="sauce"]:checked').value;
    var crustSelection = document.querySelector('input[name="crust"]:checked').value;

    // Determine which checkboxes are selected
    var meatSelection = document.querySelectorAll('input[name="meats"]:checked');
    for (var i = 0; i < meatSelection.length; i++) {
        meatList += meatSelection[i].value;
    };

    var vegetableSelection = document.querySelectorAll('input[name="vegetables"]:checked');
    for (var i = 0; i  < vegetableSelection.length; i++) {
        vegetableList += vegetableSelection[i].value;
    };

    // Set sizeCost based on pizza size
    if (sizeSelection === "Personal pizza") {
        sizeCost = 6;
    } else if (sizeSelection === "Medium pizza") {
        sizeCost = 10;
    } else if (sizeSelection === "Large pizza") {
        sizeCost = 14;
    } else {
        sizeCost = 16;
    }

    // Set meatCost based on meats selected (first one is free)
    if (meatSelection.length < 2) {
        meatCost = 0;
    } else {
        meatCost = meatSelection.length - 1;
    }

    // Set vegetableCost based on vegetables selected (first one is free)
    if (vegetableSelection.length < 2) {
        vegetableCost = 0;
    } else {
        vegetableCost = vegetableSelection.length - 1;
    }

    // Set cheeseCost based on cheese selection
    if (cheeseSelection === "Extra cheese") {
        cheeseCost = 3;
    }

    // Set crustCost based on crust selection
    if (crustSelection === "Cheese Stuffed crust") {
        crustCost = 3;
    }

    // Calculate total cost
    totalCost = sizeCost + meatCost + vegetableCost + cheeseCost + crustCost;

    // Clear the order text
    document.getElementById("order").innerHTML = "";

    // Update receipt to reflect user selections and associated costs
    function updateOrder(item, cost) {
        var table = document.getElementById("order");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = item;
        cell2.innerHTML = cost;
    }

    updateOrder("Your Order", "Subtotal");
    updateOrder(sizeSelection, sizeCost.toFixed(2));

    for (var i = 0; i < meatSelection.length; i++) {
        if (i === 0) {
            updateOrder(meatSelection[i].value, "0.00");
        } else {
            updateOrder(meatSelection[i].value, "1.00");
        }
    }

    for (var i = 0; i < vegetableSelection.length; i++) {
        if (i === 0) {
            updateOrder(vegetableSelection[i].value, "0.00");
        } else {
            updateOrder(vegetableSelection[i].value, "1.00");
        }
    }

    updateOrder(cheeseSelection, cheeseCost.toFixed(2));
    updateOrder(sauceSelection, sauceCost.toFixed(2));
    updateOrder(crustSelection, crustCost.toFixed(2));
    updateOrder("Total Cost", totalCost.toFixed(2));

    // Display the order
    document.getElementById("receipt").style.display = "block";
}


function cancel() {

    // Clear the order text
    document.getElementById("order").innerHTML = "";
    // Hide the order
    document.getElementById("receipt").style.display = "none";
    // Reset the input values to their default states
    document.getElementById("menu").reset();
}
