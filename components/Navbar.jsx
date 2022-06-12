import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const navLinks = [
		["Home", "/"],
		["Market", "/market"],
		["Inventory", "/inventory"],
		["Sell", "/sell"],
		["Buy", "/buy"],
		["Bargain", "/bargain"],
		["Community", "/community"],
		["Help", "/help"],
	];

	var [activeLink, setActiveLink] = useState("Home");

	return (
		<nav className='navbar bg-buff-background w-[100%] flex items-center h-20 sticky top-0 drop-shadow-2xl z-10'>
			{navLinks.map(([title, url]) => (
				<div key={title} className={`box-border h-full inline-block border-t-[5px] first:mr-3 first:ml-6 py-5 mr-6 ${title === activeLink ? "border-buff-100 text-bufflink-200 hover:text-bufflink-100  " : "border-buff-background"}`}>
					<Link href={url} passHref>
						<a
							className='text-buff-text'
							onClick={() => {
								setActiveLink(title);
							}}>
							{title}
						</a>
					</Link>
				</div>
			))}
		</nav>
	);
};

export default Navbar;
