import Image from "next/image";

const Card = ({ rarityColor, floatQuality, floatValue, imgSrc, hasStickers, stickerOneSrc, stickerTwoSrc, stickerThreeSrc, stickerFourSrc, isScreenshot, goodName, goodPrice }) => {
	return (
		<div className='aspect-square grid-item bg-buff-card rounded relative p-2 hover:bg-buff-cardhover'>
			<div className={`absolute top-0 left-0  card-rarity bg-${rarityColor} h-2 w-2`}></div>
			<div className='absolute card-tags text-xs '>
				<span className={`float text-${rarityColor}`}>{floatQuality + " "}</span>
				<span className='float-value text-white'>{floatValue}</span>
			</div>
			<div className='absolute card-img top-2 left-[10%] h-[60%] w-[80%]'>
				<Image layout='responsive' src={imgSrc} alt='Item Logo'></Image>
			</div>
			{hasStickers && (
				<div className='absolute card-stickers top-4'>
					<Image className='w-2 h-2 mb-2' layout='fill' src={stickerOneSrc} alt='Sticker 1'></Image>
					<Image className='w-2 h-2 mb-2' layout='fill' src={stickerTwoSrc} alt='Sticker 2'></Image>
					<Image className='w-2 h-2 mb-2' layout='fill' src={stickerThreeSrc} alt='Sticker 3'></Image>
					<Image className='w-2 h-2 mb-2' layout='fill' src={stickerFourSrc} alt='Sticker 4'></Image>
				</div>
			)}
			<div className='absolute cards-bottom bottom-2 flex-col'>
				{isScreenshot && <button className='screenshot-btn mt-2 rounded h-6 w-[67px] text-xs bg-[#5A5A5A] text-bufftext-200 '>Screenshot</button>}
				<p className='good-name mt-2 text-xs text-bufftext-200'>{goodName}</p>
				<p className='good-price mt-2 text-base text-white'>{goodPrice}</p>
			</div>
		</div>
	);
};

export default Card;
