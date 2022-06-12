import Child from "./Child";
import useMenuItem from "../Hooks/useMenuItem";

const TypeSubMenu = () => {
	return (
		// must add the parent-sub-menu class to this respective sub-menu in addition to the sub-menu-{title} class
		<div className='bg-buff-menu sub-menu-type z-50'>
			<div className='basic-filters-container'>
				<h2 className='text-xl pb-2 p-4'>Type</h2>
				{useMenuItem("Type", <Child title='Type' isNestedSubmenu={true} />)}
				{useMenuItem("Quality", <Child title='Quality' isNestedSubmenu={false} />)}
				{useMenuItem("Rarity", <Child title='Rarity' isNestedSubmenu={false} />)}
				{useMenuItem("Price", <Child title='Price' isNestedSubmenu={false} />)}
				{useMenuItem("Stickers", <Child title='Stickers' isNestedSubmenu={false} />)}
			</div>
		</div>
	);
};

export { TypeSubMenu };
