/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				buff: {
					100: "#C9A86B",
					card: "#303030",
					cardhover: "#3E3E3E",
					background: "#282828",
					darkerBackground: "#1B1B1D",
					menu: "#282828",
					subMenu: "#303030",
				},
				bufflink: {
					100: "#F3CB8B",
					200: "#AA9967",
				},
				bufftext: {
					200: "#C2C2C2",
				},
				rarityColor: {
					common: "#C9A86B",
					uncommon: "#F3CB8B",
					rare: "#AA9967",
					epic: "#8C5B3F",
					legendary: "#6F4C37",
					special: "#F3CB8B",
				},
			},
			boxShadow: {
				mainmenu: "4px 0 4px rgb(0 0 0 / 24%)",
			},
		},
		plugins: [],
	},
};
