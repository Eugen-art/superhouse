
function calculate() {
	'use strict';

	// For storing the order total:
	var total;

var total;

    // Get references to the form values:
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
    var quantity = parseInt(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var discount = parseFloat(document.getElementById('discount').value);
	var shipping = parseFloat(document.getElementById('shipping').value);
	
	total = quantity * price;
	console.log("total before tax: " + total);

	tax = tax / 100;
	tax = tax + 1;

	//Factor in the tax
	total = total * tax;
	console.log("total after tax: " + total);

	if(quantity>=100){
	discount += discount;
	}

	total = total - discount;
	console.log("total after discount: " + total);


	//shipping
	total = total + shipping;
	// Format the total to two decimal places:
	total = total.toFixed(2);

	// Display the total:
	document.getElementById('total').value = total;

	// Return false to prevent submission:
	return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
	'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;

	