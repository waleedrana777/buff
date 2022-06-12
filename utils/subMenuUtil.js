function showTypeSubMenu() {
	// check if it already exists
	const subMenuExists = document.getElementById("type-sub-menu");

	if (!subMenuExists) {
		// create submenu
		const subMenu = document.createElement("div");
		subMenu.className = "sub-menu";
		subMenu.id = "type-sub-menu";

		// set its position to absolute
		subMenu.style.position = "absolute";
		subMenu.style.top = "0px";
		subMenu.style.left = "230px";
		subMenu.style.zIndex = "1";

		// create a submenu-item
		const subMenuItem = document.createElement("div");
		subMenuItem.className = "sub-menu-item";
		subMenuItem.id = "type-sub-menu-item";
		subMenuItem.innerHTML = `Type`;

		// append submenu-item on submenu
		subMenu.appendChild(subMenuItem);

		// append submenu on right of basic-filters-container class
		const basicFiltersContainer = document.getElementsByClassName("basic-filters-container")[0];
		basicFiltersContainer.appendChild(subMenu);
	}
}

function showQualitySubMenu() {
	// show submenu
}

function showRaritySubMenu() {
	// show submenu
}

function showPriceSubMenu() {
	// show submenu
}

function hidePriceSubMenu() {
	// hide submenu
}

function showStickersSubMenu() {
	// show submenu
}

export { showTypeSubMenu, showQualitySubMenu, showRaritySubMenu, showPriceSubMenu, showStickersSubMenu };
