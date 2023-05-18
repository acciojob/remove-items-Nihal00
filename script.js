//your JS code here. If required.
function removeItems() {
	let selectedOption = document.getElementById('colorSelect').options[document.getElementById('colorSelect').selectedIndex];

	selectedOption.remove();

}

document.getElementById('removeBtn').addEventListner('click', removeItems);
