function totalSum (cid) {
	let returnSum = 0;
	cid.forEach(item => {
		 returnSum += item[1] * 100;
	});
	return returnSum / 100;
}

function checkCashRegister(price, cash, cid) {
	let change = cash - price;
	let returnObj = new Object();
	let totalCid = totalSum(cid);

	if (change > totalCid) {
		returnObj.status = "INSUFFICIENT_FUNDS";
		returnObj.change = [];
		return returnObj;

	} else if (change == totalCid) {
		returnObj.status = "CLOSED";
		returnObj.change = cid;

	} else {
		let denominationArr = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
		let changeArr = [];

		for (let i = 0; i < denominationArr.length; i++) {
			let currCount = 0;

			while (change >= denominationArr[i]) {
				//console.log(cid, change);
				//console.log(cid[cid.length - i-1][0]);
				if (denominationArr[i] > cid[cid.length - i-1][1]) break;
				else {
					currCount++;
					change -= denominationArr[i];
					cid[cid.length-i-1][1] -= denominationArr[i]
				}
			}
			if (currCount > 0) {
				if (denominationArr[i] == 0.01 && change > 0) {
					// Check for float sum errors and add extra dime to make up for them
					currCount++;
				}
				changeArr.push([cid[cid.length-i-1][0], currCount * denominationArr[i]]);
			}
		}

		returnObj.status = "OPEN";
		returnObj.change = changeArr;

		console.log(change);

		if (change > 0.1) {
			// Check if change in cid cannot denominate change needed
			returnObj.status = "INSUFFICIENT_FUNDS";
			returnObj.change = [];
		}
	}
	return returnObj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
