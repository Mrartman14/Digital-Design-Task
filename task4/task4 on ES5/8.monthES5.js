var month = function (a) {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sentember", "October", "November", "December"];
	return {
		number: function number(num) {
			return months[num];
		},
		name: function name(funcName) {
			return months.indexOf(funcName);
		}
	};
}();
console.log(month.number(2));
console.log(month.name("November"));