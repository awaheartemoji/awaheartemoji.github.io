let arr = [
	["a1", "a2", "a3"],
	["b", "b", "b"],
	["c", "c", "c", "r"],
	["d", "d", "d"],
];




e = [...Array(arr[0].length)].map((_, i) => arr.map((r) => r[i]));

console.log(e);

console.log(e[0]);
console.log(e[1]);
console.log(e[2]);
console.log(e[3]);


// console.log(e[0][0]); console.log(e[0][1]); console.log(e[0][2]); console.log(e[0][3]);
// console.log(e[1][0]); console.log(e[1][1]); console.log(e[1][2]); console.log(e[1][3]);
// console.log(e[2][0]); console.log(e[2][1]); console.log(e[2][2]); console.log(e[2][3]);

// // let lines = [
// // 	{ template: "box-top" },
// // 	["!% %max!"],
// // 	["!    ", "WARNING: Code beyond this point has been generated by a script, anything you change here will be overwritten.", "%right%    !"],
// // 	["?    ", "file://./generate-colors.js", "%right%    ?"],
// // 	["!% %max!"],
// // 	{ template: "box-bottom" },
// // ];


// let lines = [
// 	{ template: "box-top" },
// 	["!% %max!"],
// 	["!    ", "WARNING: Code beyond this point has been generated by a script, anything you change here will be overwritten.", "%right%    !"],
// 	["?    ", "file://./generate-colors.js", "%right%    ?"],
// 	["!% %max!"],
// 	{ template: "box-bottom" },
// ];

// const templates = {
// 	box: { top: "┌%─%max┐", bottom: "└%─%max┘" },
// };


// // Replace templates
// lines.forEach((obj, i) => {
// 	if (typeof obj !== "object" || Array.isArray(obj)) { return; }
// 	const [id, part] = obj.template.split("-");
// 	lines[i] = [templates[id][part]];
// });




// // Calculate column lengths
// let longestLine = 0;
// const columnLengths = [];
// lines.forEach((row, rowID) => {

// 	// Ignore singlecol rows
// 	if (row.length === 1) { return; }

// 	// Calculate longest full line
// 	longestLine = Math.max(longestLine, row.join("").length);

// 	row.forEach((col, colID) => {
// 		const length = col.replace(/%.%(max)/, "").length; // Exculde formatting syntax from the length
// 		if (!(length <= columnLengths[colID])) { columnLengths[colID] = length; }
// 	});

// });


// // Make columns equal width
// lines = lines.map((row, rowID) => {

// 	// Multicol lines
// 	if (row.length > 1) {
// 		return row.map((col, colID) => {

// 			// Replace any formatting syntax
// 			const match = col.match(/(?<=%).(?=%(max))/g);
// 			if (match !== null) {
// 				col = col.replace(/%.%(max)/, match[0].repeat(longestLine - row.join("").length));
// 			}
// 			console.log(col);



// 			return col += " ".repeat(columnLengths[colID] - col.length);
// 		}).join("");
// 	}

// 	// Single col lines
// 	const elemnt = row[0].match(/(?<=%).(?=%(max))/g)[0];
// 	return row[0].replace(/%.%(max)/, elemnt.repeat(longestLine));
// });




// longestLine;
// columnLengths;

// console.log(lines);
// console.log(lines.join("\n"));



