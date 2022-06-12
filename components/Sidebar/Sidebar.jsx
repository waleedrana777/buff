import { subMenuClassToCompare, TypeSubMenu } from "./TypeSubMenu";
import useMenuItem from "../Hooks/useMenuItem";
import Child from "./Child";
import { PriceSubMenu } from "./PriceSubMenu";

const Sidebar = () => {
	return (
		<div className='wrapper bg-buff-menu drop-shadow-lg shadow-mainmenu mr-2 z-10'>
			<div className='basic-filters-container relative'>
				<h2 className='text-xl mb-2 m-4'>Basic Filters</h2>
				{useMenuItem("Type", <TypeSubMenu />)}
				{useMenuItem("Quality", <Child title='Quality' isNestedSubmenu={true} />)}
				{useMenuItem("Rarity", <Child title='Rarity' isNestedSubmenu={true} />)}
				{useMenuItem("Price", <PriceSubMenu />)}
				{useMenuItem("Stickers", <Child title='Stickers' isNestedSubmenu={true} />)}
			</div>
		</div>
	);
};

export default Sidebar;
