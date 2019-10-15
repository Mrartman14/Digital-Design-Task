//---------------------------------1---------------------------------//
for (let colNum = 0; colNum < 7; colNum++) {
	let string = "";
	for (let row = 0; row <= colNum; row++) {
		string += "#";
	}
	console.log(string);
}
//---------------------------------2---------------------------------//
let columns = 8;
for (let i = 0; i < columns; i++) {
	let string = "";
	if (i % 2 == 0) {
		for (let a = 0; a < columns; a++) {
			if (a % 2 == 0) {
				string += "#";
			} else {
				string += " ";
			}
		}
	} else {
		for (let a = 0; a < columns; a++) {
			if (a % 2 == 0) {
				string += " ";
			} else {
				string += "#";
			}
		}
	}
	console.log(string);
}

//---------------------------------3---------------------------------//
function min(a, b) {
	if (a < b) {
		return a;
	} else return b;
}
console.log(min(0, 10));
console.log(min(0, -10));

//---------------------------------4---------------------------------//
function range(start, end, step = 1) {
	let rangeArray = [];
	if (end - start < 0) {
		for (let i = 0; i * Math.abs(step) < -(end - start) + 1; i++) {
			rangeArray[i] = start - i * Math.abs(step);
		}
	} else {
		for (let i = 0; i * Math.abs(step) < (end - start) + 1; i++) {
			rangeArray[i] = start + i * Math.abs(step);
		}
	}
	return rangeArray;
}
console.log(range(5, 2, -1));

function sum(array) {
	let amount = 0;
	for (let i = 0; i < array.length; i++) {
		amount += array[i];
	}
	return amount;
}
console.log(sum(range(1, 10)));



//---------------------------------5---------------------------------//
function reverseArray(a) {
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i] = a[a.length - i - 1];
	}
	return newArr;
}
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(a) {
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i] = a[a.length - i - 1];
	}
	for (let i = 0; i < a.length; i++) {
		a[i] = newArr[i];
	}
	return a;
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//---------------------------------6---------------------------------//
let arrays = [[1, 2, 3], [4, 5], [6]];
let result = arrays.reduce((sum, current) => {
	return sum.concat(current);
});
console.log(result);

//---------------------------------7---------------------------------//
function deepEqual(firstValue, secondValue) {
	if (typeof firstValue === "object" && typeof secondValue === "object" && firstValue !== null && secondValue !== null) {
		let aValues = Object.values(firstValue);
		let bValues = Object.values(secondValue);
		if (aValues.toString() === bValues.toString()) {
			return true;
		} else return false;
	} else {
		if (firstValue === secondValue) {
			return true;
		} else return false;
	}
}

let obj = {
	here: {
		is: "an"
	},
	object: 2
}
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

//---------------------------------8---------------------------------//
let month = function (a) {
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sentember", "October", "November", "December"];
	return {
		number: (num) => { return months[num] },
		name: (name) => { return months.indexOf(name) }
	}
}();
console.log(month.number(2));
console.log(month.name("November"));
