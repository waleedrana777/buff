import TypeSubmenu from "./TypeSubmenu";
import useMenuItem from "../Hooks/useMenuItem";
import SubMenuChild from "./SubMenuChild"
const subMenuClassToCompare = "submenu-type";

const TypeSubMenu = () => {
	return (
		// must add the parent-sub-menu class to this respective sub-menu in addition to the sub-menu-{title} class
		<div className='bg-buff-menu drop-shadow-lg parent-sub-menu sub-menu-type'>
			<div className='basic-filters-container'>
				<h2 className='text-xl pb-2 p-4'>Type</h2>
				{useMenuItem("Type", <SubMenuChild />, false)}
			</div>
		</div>
	);
};

export { subMenuClassToCompare as subParentMenuClassToCompare, TypeSubMenu as TypeSubParentMenu };
