function rollDi() {
	// Get the dice elements from the HTML
	var dice1 = document.getElementById("dice1");

	// Generate random numbers between 1 and 6 for each dice
	var roll1 = Math.floor(Math.random() * 20) + 1;

	// Update the dice elements with the new numbers
	dice1.innerHTML = roll1;
}
