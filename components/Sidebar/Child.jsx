import useMenuItem from "../Hooks/useMenuItem";
import { useState, useEffect } from "react";

const Child = ({ title, isNestedSubmenu = false }) => {
	const [isOpen, setIsOpen] = useState(false);
	const classToCompare = title.toLowerCase();

	useEffect(() => {
		document.addEventListener(
			"click",
			function (event) {
				const subMenu = document.getElementsByClassName("sub-menu-" + classToCompare)[0];
				const nestedSubMenu = "";

				if (isNestedSubmenu) {
					nestedSubMenu = document.getElementsByClassName("sub-menu-child-" + classToCompare)[0];
				}

				if (subMenu) {
					if (isNestedSubmenu && nestedSubMenu) {
						if (!subMenu.contains(event.target) && !nestedSubMenu.contains(event.target) && event.target.id != `basic-filters-item-arrow bi bi-caret-right-fill-${title}`) {
							setIsOpen(false);
						}
					} else {
						if (!subMenu.contains(event.target) && event.target.id != `basic-filters-item-arrow bi bi-caret-right-fill-${title}`) {
							setIsOpen(false);
						}
					}
				}
			},
			false
		);

		return () => {
			document.removeEventListener("click", () => {});
		};
	}, []);

	return <div className={`sub-menu-${title}`}> Child form</div>;
};

export default Child;
