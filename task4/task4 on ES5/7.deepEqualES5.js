Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = deepEqual;
var obj = {
	here: {
		is: "an"
	},
	object: 2
};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

function deepEqual(firstValue, secondValue) {
	if ((typeof firstValue === "undefined" ? "undefined" : _typeof(firstValue)) === "object" && (typeof secondValue === "undefined" ? "undefined" : _typeof(secondValue)) === "object" && firstValue !== null && secondValue !== null) {
		var aValues = Object.values(firstValue);
		var bValues = Object.values(secondValue);
		if (aValues.toString() === bValues.toString()) {
			return true;
		} else return false;
	} else {
		if (firstValue === secondValue) {
			return true;
		} else return false;
	}
}