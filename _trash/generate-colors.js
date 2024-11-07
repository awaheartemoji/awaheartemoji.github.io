// * file://./_colors.scss

const chroma = require("chroma-js"); const fs = require("node:fs");
const rotateArray = (arr) => {
	return arr.sort((a, b) => b.length - a.length)[0].map((_, i) => arr.map((r) => r[i]));
};



// User Config
/*

| hello world
! hello world
@ hello world
# hello world
$ hello world
% hello world
^ hello world
& hello world
* hello world
- hello world
_ hello world
+ hello world
= hello world
~ hello world
< hello world
> hello world
, hello world
. hello world
? hello world
*/
const e = [
	{ "tag": "!", "color": "#f0383e" },
	{ "tag": "@", "color": "#ff8c00" },
	{ "tag": "#", "color": "#f4cc52" },
	{ "tag": "$", "color": "#a7f964" },
	{ "tag": "%", "color": "#5bfdca" },
	{ "tag": "^", "color": "#7192f4" },
	{ "tag": "&", "color": "#c66bea" },
	{ "tag": "*", "color": "#f073dd" },
	{ "tag": "-", "color": "#e6658e" },
	{ "tag": "_", "color": "#cecece" },
	{ "tag": "=", "color": "#cecece" },
	{ "tag": "+", "color": "#cecece" },
	{ "tag": "~", "color": "#cecece" },
	{ "tag": "<", "color": "#cecece" },
	{ "tag": ">", "color": "#cecece" },
	{ "tag": ",", "color": "#cecece" },
	{ "tag": ".", "color": "#cecece" },
	{ "tag": "?", "color": "#cecece" },
	{ "tag": "|", "color": "#cecece" },
	{ "tag": "//", "color": "#474747" },
];
const path = "./helpers/_colors.scss";





// Manually set the base palette
const basePalette = {
	bg: ["#1e1c1f", "#9862b1"],
	fg: ["#e2e0db", "#ffc0ff", "#e3439b"],
	hi: ["#ea6dad"],
};
const variations = 30;


if (variations % 2 !== 0) { throw error("variations must be even"); }





//

	const hex = (int) => (int + 1).toString(16);

// Keep everything before the comment
const toKeep = fs.readFileSync(path, "utf-8").match(/.+(?=\/\* 617761)/s)[0];


Object.entries(basePalette).forEach(([key, value]) => { basePalette[key] = { main: value }; });

// 		Main function to adjust colors

// ? @color: one of the manually set base colors
// ?	 @i: one of the manually set base colors
// ? @color: one of the manually set base colors

function adjust (color, i, isLighten) {
	let oklch = chroma(color).oklch().map((x) => x || 0);


	// Channel Modifiers, values will be added to the color
	[
		i * 0.025,
		i * 0.003,
		i * 0.4,
	]
	.forEach((c, i) => oklch[i] += isLighten ? c : -c);


	// console.log(chroma.oklch(l, c, h).hex(), l, c, h);
	return chroma.oklch(...oklch);
}



// X Format the base palette from being human readable to being easier to work with
Object.entries(basePalette).forEach(([label, value]) => {
	const mainColors = basePalette[label].main;

	// Convert array of colors to array of sass variables for the color
	basePalette[label].main = mainColors
		.map((color, i) => `$${label}-${hex(i)}: ${color} !default;`);

	// Create 'secondary' property that contains all secondary colors grouped into mains
	basePalette[label].secondary = mainColors.map((color, i_main) => {
	return [
	...[...Array(variations / 2)].map((_, i) => `$${label}-${hex(i_main)}l${hex(i)}: ${lighten(color, i + 1)} !default;`).reverse(),
	`$awawaw: ${mainColors[i_main]};`,
	...[...Array(variations / 2)].map((_, i) => `$${label}-${hex(i_main)}d${hex(i)}: ${darken(color, i + 1)} !default;`),
	];
	});
});



function darken (color, i) { return adjust(color, i, false); }
function lighten (color, i) { return adjust(color, i, true); }







// Format into working scss [ignore the warning below, this is not for this script]

const message = [
	[{ template: "boxTop" }],
	["!    ", " %max", "    !"],
	["!    ", "WARNING: Code beyond this point has been generated by a script, anything you change here will be overwritten.", "    !"],
	["?    ", "file://./generate-colors.js", "    ?"],
	["!    ", " %max", "    !"],
	[{ template: "boxBottom" }],
];

let string = `${toKeep}\
/* 617761
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
!																													!
!	WARNING: Code beyond this point has been generated by a script, anything you change here will be overwritten.	!
?	[file://./generate-colors.js]																					?
!																													!
└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
*/
`;

const entries = Object.entries(basePalette);


// Title for main colors
string += `

// MAIN COLORS:

`;


// Calculate the longest line for use in padding the main column titles
let longestLine = Object.values(basePalette)
	.map((colors) => colors.main.map((color) => color.length).sort((a, b) => b - a)[0])
	.sort((a, b) => b - a)[0];

// Generate a column for each main color and add it to the string
string += rotateArray(entries.map(([key, val]) => {
	return[`/* ${key}:`.padEnd(longestLine) + "*/", ...val.main];
})).map((x) => x.join("    ")).join("\n");



console.log(basePalette);

//
entries.forEach(([mainKey, obj], index) => {

	obj.secondary.forEach((colorArray) => {

		//
		//

	});
});



//


// ${Object.entries(basePalette).map(([key, value]) => {
// 	return `\n// Main colors for '${key}': \n${value.main.join("\n")}`;
// }).join("\n")}


// ${Object.entries(basePalette).map(([key, value]) => {
// 	[
// 		"",
// 	];
// 	return `\n\n\n\n\n// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n//    Secondary colors for '${key}': \n// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n${value.secondary.map((x) => x.join("\n")).join("\n\n\n\n\n\n\n\n")}`;
// }).join("\n")}
// `;

fs.writeFileSync(path, string);

null;
