import { useState, useEffect } from "react";
import { showTypeSubMenu, showQualitySubMenu, showRaritySubMenu, showPriceSubMenu, showStickersSubMenu } from "../../utils/subMenuUtil";

const Sidebar = () => {
	return (
		<div className='wrapper bg-buff-card mr-2'>
			<div className='basic-filters-container relative'>
				<h2 className='text-xl mb-2 m-4'>Basic Filters</h2>
				{useMenuItem("Type", showTypeSubMenu)}
				{useMenuItem("Quality", showQualitySubMenu)}
				{useMenuItem("Rarity", showRaritySubMenu)}
				{useMenuItem("Price", showPriceSubMenu)}
				{useMenuItem("Stickers", showStickersSubMenu)}
			</div>
		</div>
	);
};

const useMenuItem = (title, onClick) => {
	return (
		<div className='basic-filters-item flex justify-between align-center  p-4 h-11  hover:bg-buff-cardhover'>
			<div className={`basic-filters-item-title-${title}`}>{title}</div>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
				<path id='basic-filters-item-arrow bi bi-caret-right-fill' onClick={onClick} className='cursor-pointer' d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' />
			</svg>
		</div>
	);
};

export default Sidebar;
