function palindrome(str) {
	let inputArr = str.replace(/[^0-9a-z]/gi, "").split("");	// Split input string into array, taking out non-alphanumeric characters
	let inputReverse = inputArr.slice();
	inputReverse.reverse();

	//console.log(inputArr);
	//console.log(inputReverse);

	for (let i = 0; i < inputArr.length; i++) {
		if (inputArr[i].toLowerCase() != inputReverse[i].toLowerCase()) return false;
	}

    return true;
}



console.log(palindrome("A man, a plan, a canal. Panama"));
