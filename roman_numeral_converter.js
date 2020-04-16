function convertToRoman(num) {
	let decimalNumeral = 	[	1000, 	900, 	500, 	400, 	100, 	90, 	50, 	40, 	10, 	9, 		5, 		4, 1];
	let romanNumeral = 		[	"M", 	"CM", 	"D", 	"CD", 	"C",	"XC", 	"L", 	"XL", 	"X", 	"IX", 	"V", 	"IV",	 "I"];
	let returnRoman = "";

	for (let i = 0; i < decimalNumeral.length; i++) {
		while (decimalNumeral[i] <= num) {
			returnRoman += romanNumeral[i];
			num -= decimalNumeral[i];
		}
	}

	return returnRoman;
}

console.log(convertToRoman(36));
