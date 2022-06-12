import Child from "./Child";
import useMenuItem from "../Hooks/useMenuItem";

const PriceSubMenu = () => {
	return (
		// must add the parent-sub-menu class to this respective sub-menu in addition to the sub-menu-{title} class
		<div className='bg-buff-menu drop-shadow-lg sub-menu-price'>
			<div className='basic-filters-container'>
				<h2 className='text-xl pb-2 p-4'>Type</h2>
				{useMenuItem("Type", <Child title='Type' />, false)}
				{useMenuItem("Quality", <Child title='Quality' />, false)}
				{useMenuItem("Rarity", <Child title='Rarity' />, false)}
				{useMenuItem("Price", <Child title='Price' />, false)}
				{useMenuItem("Stickers", <Child title='Stickers' />, false)}
			</div>
		</div>
	);
};

export { PriceSubMenu };
