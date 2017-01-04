function maxNum(num1, num2, num3){
	var max = 0;
	if((num1 >= num2) && (num1 >= num3)){
		max = num1;
	}
	else if((num2 >= num1) && (num2 >= num3)){
		max = num2;
	}
	else{
		max = num3;
	}
	return max;
}
	var greattestNumber = 0;	
	window.onload = function() {
		greattestNumber = maxNum(25,45,11);
		console.log("The Greatest Number is="+greattestNumber);
   };
		
		
