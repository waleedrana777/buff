import { useState, useEffect } from "react";

const useMenuItem = (title, Component, isLastNested = false) => {
	const [isOpen, setIsOpen] = useState(false);
	const classToCompare = title.toLowerCase();

	useEffect(() => {
		document.addEventListener(
			"click",
			function (event) {
				const subMenu = document.getElementsByClassName("sub-menu-" + classToCompare)[0];

				if (subMenu) {
					if (!subMenu.contains(event.target) && event.target.id != `basic-filters-item-arrow bi bi-caret-right-fill-${title}`) {
						setIsOpen(false);
					}
				}
			},
			false
		);

		return () => {
			document.removeEventListener("click", () => {});
		};
	}, []);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return isLastNested ? (
		<div className={`${isOpen ? "" : "hidden"} sub-menu-child-${title}`}> Child form</div>
	) : (
		<div className='basic-filters-item flex justify-between align-center  p-4 h-11  hover:bg-buff-cardhover'>
			<div className={`basic-filters-item-title-${title}`}>{title}</div>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
				<path id={`basic-filters-item-arrow bi bi-caret-right-fill-${title}`} onClick={handleClick} className='cursor-pointer' d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' />
			</svg>

			{<div className={`${isOpen ? "" : "hidden"} absolute p-4 bg-buff-subMenu z-20 basic-filters-sub-menu -top-[6%] left-full w-full min-h-[500px] `}>{Component}</div>}
		</div>
	);
};

export default useMenuItem;
