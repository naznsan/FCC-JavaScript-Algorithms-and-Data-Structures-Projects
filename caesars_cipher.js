function rot13(str) {
	let inputArr = str.split("");
	let outputStr = "";
	let alphaRegex = /[A-Za-z]/;

	inputArr.forEach(char => {
		if (!alphaRegex.test(char)) {
			outputStr += char;
		} else {
			let charCode = char.charCodeAt() + 13;
			if (charCode > 90) {
				charCode = charCode - 90 + 64;
			}
			outputStr += String.fromCharCode(charCode);
		}
	});

	return outputStr;
}

console.log(rot13("SERR PBQR PNZC!"));
