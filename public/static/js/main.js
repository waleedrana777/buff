// hide any submenus that are currently shown
console.log("main.js loaded");

// remove any submenus on click on anywhere outside submenu
document.addEventListener(
	"click",
	function (event) {
		const subMenus = document.getElementsByClassName("sub-menu");
		const subMenu = subMenus[0];
		if (subMenu != undefined) {
			if (!subMenu.contains(event.target) && event.target.id != "basic-filters-item-arrow bi bi-caret-right-fill") {
				// subMenu.remove();
				console.log("removed submenu");
			}
		}
	},
	false
);
