// Fill in the body of each function with the code required

var add = function(num1, num2) {
	total = num1 + num2;
	return total;
};

var subtract = function(num1, num2) {
	total = num1 - num2;
	return total;
};

var multiply = function(num1, num2) {
	total = num1 * num2;
	return total;
};

var divide = function(num1, num2) {
	if (num2 == 0) {
		total = num1 / num2;
		return total;
	} 
	else 
	{ 
		return false; 
	}
};
