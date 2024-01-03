function fibonacci(num) {
// your code her
	if (num <=0) {
		return "invalid input"
	}else if (num ===1) {
		return 0
	}else if (num===2) {
		return 1
	}else{
		fibArry=[0,1]

		for (let i = 0; i <=num; i++) {
			fibArry.push(fibArry[i-1] fibArry[i-2])
		}
		return fibArry[num-1]
	}

	
}
console.log(fibonacci(1))
console.log(fibonacci(5))

module.exports = fibonacci;
