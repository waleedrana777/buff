import Head from "next/head";
import Script from "next/script";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar/Sidebar";
import wildfire from "../public/images/AWP Wildfire.png";
import { marketLayoutGrid, marketGrid } from "../styles/market.module.css";

const Market = () => {
	return (
		<div className='p-4 bg-[#1C1C1E] min-h-[1500px] w-full'>
			{/* <Head>
				<script type='text/javascript' src='static/js/main.js'></script>
			</Head> */}
			<div className={`${marketLayoutGrid} md:hidden`}>
				<Sidebar />
				<div className={marketGrid}>
					<Card rarityColor={"rarityColor-rare"} floatQuality={"FT"} floatValue='0.195463' imgSrc={wildfire} hasStickers={false} isScreenshot={true} goodName={"MP9 | Starlight Protector"} goodPrice={"$ 17.23"} />
					<Card rarityColor={"rarityColor-rare"} floatQuality={"FT"} floatValue='0.195463' imgSrc={wildfire} hasStickers={false} isScreenshot={true} goodName={"MP9 | Starlight Protector"} goodPrice={"$ 17.23"} />
					<Card rarityColor={"rarityColor-rare"} floatQuality={"FT"} floatValue='0.195463' imgSrc={wildfire} hasStickers={false} isScreenshot={true} goodName={"MP9 | Starlight Protector"} goodPrice={"$ 17.23"} />
					<Card rarityColor={"rarityColor-rare"} floatQuality={"FT"} floatValue='0.195463' imgSrc={wildfire} hasStickers={false} isScreenshot={true} goodName={"MP9 | Starlight Protector"} goodPrice={"$ 17.23"} />
					<Card rarityColor={"rarityColor-rare"} floatQuality={"FT"} floatValue='0.195463' imgSrc={wildfire} hasStickers={false} isScreenshot={true} goodName={"MP9 | Starlight Protector"} goodPrice={"$ 17.23"} />
					<Card rarityColor={"rarityColor-rare"} floatQuality={"FT"} floatValue='0.195463' imgSrc={wildfire} hasStickers={false} isScreenshot={true} goodName={"MP9 | Starlight Protector"} goodPrice={"$ 17.23"} />
					<Card rarityColor={"rarityColor-rare"} floatQuality={"FT"} floatValue='0.195463' imgSrc={wildfire} hasStickers={false} isScreenshot={true} goodName={"MP9 | Starlight Protector"} goodPrice={"$ 17.23"} />
					<Card rarityColor={"rarityColor-rare"} floatQuality={"FT"} floatValue='0.195463' imgSrc={wildfire} hasStickers={false} isScreenshot={true} goodName={"MP9 | Starlight Protector"} goodPrice={"$ 17.23"} />
				</div>
			</div>
		</div>
	);
};

export default Market;
