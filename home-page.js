// CSE 154
// This file is a tip calculator page using JavaScript.
// It uses unobtrusive Javascript.
// This is not quite a good example of Javascript style yet
// We will fix it next time.

window.onload = setup;

function setup() {
	var calculateButton = document.getElementById("calculate");
	calculateButton.onclick = calculate;
}

// Called when the "Calculate!" button is clicked.
// Computes/displays the meal's tip and total amount to pay.
// turns the tip box red if the user leaves a tiny tip
function calculate() {
	var sub = parseFloat(document.getElementById("sub").value);
	var tip = parseInt(document.getElementById("tip").value);
	var total = sub + (tip * sub / 100);

	var totalBox = document.getElementById("total");
	totalBox.innerHTML = total;

	var tipBox  = document.getElementById("tip");
	if(tip < 20) {
		tipBox.style.backgroundColor = "red";
	} else {
		tipBox.style.backgroundColor = "initial";
	}
}
