//your JS code here. If required.
const colorSelect = document.getElementById('colorSelect');
const removeBtn = document.getElementById('removeBtn');

function removeItems() {
	const selectedOpt = colorSelect.options[colorSelect.selectedIndex];

	selectedOpt.remove();
}

removeBtn.addEventListner('click', removeItems());
