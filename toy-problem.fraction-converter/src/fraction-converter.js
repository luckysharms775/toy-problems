/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function (number) {


//greatest common divisor helper function
	let gcd = function(a, b) {
		if (b < 0.0000001) {
			return a;
		}
		return gcd(b, Math.floor(a % b));
	};
	let length = number.toString().length;
	let denominator = Math.pow(10, length);
	let numerator = number * denominator;
	let divisor = gcd(numerator, denominator);
	numerator /= divisor;
	denominator /= divisor;
  	let base = 0;
  

	number = Math.floor(numerator) + '/' + Math.floor(denominator);
	if ( base ) {
		number  = base + ' ' + number ;
	}
	return number;
};

module.exports = { toFraction };