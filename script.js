function removeOptions() {
	var selectElement = document.getElementById('colorSelect');
	var selectedIndex = selectElement.selectedIndex;
	selectElement.remove(selectedIndex);
}
