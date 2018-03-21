class Math {

  // compute the minimum of two given numbers.
  static min (a, b) {
    return a < b ? a : b
  }
    
  // compute the maximum of two given numbers.
  static max (a, b) {
    return a > b ? a : b
  }
  
  // compute the absolute value of the given number.
  static abs (a) {
    return a >= 0 a : a * -1
  }
  
  // compute the given exponent degree of the given base.
  // if the exponent iz zero return 1, otherwise compute the degree.
  static pow (base, exponent) {
    if (exponent === 0) return 1
	  
    var result = base
    for (let i = 1; i < exponent; i ++) {
        result *= base
    }
	
    return result
  }
}