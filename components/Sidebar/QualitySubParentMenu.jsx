import Child from "./Child";
import useMenuItem from "../Hooks/useMenuItem";

const QualitySubParentMenu = () => {
	return (
		// must add the parent-sub-menu class to this respective sub-menu in addition to the sub-menu-{title} class
		<div className='bg-buff-menu drop-shadow-lg parent-sub-menu sub-menu-type'>
			<div className='basic-filters-container'>
				<h2 className='text-xl pb-2 p-4'>Type</h2>
				{useMenuItem("Type", <Child title='Type' />)}
				{useMenuItem("Quality", <Child title='Quality' />)}
				{useMenuItem("Rarity", <Child title='Rarity' />)}
				{useMenuItem("Price", <Child title='Price' />)}
				{useMenuItem("Stickers", <Child title='Stickers' />)}
			</div>
		</div>
	);
};

export { QualitySubParentMenu };
