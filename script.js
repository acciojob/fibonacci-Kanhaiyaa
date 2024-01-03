function fibonacci(num) {
// your code here
	let n1=0,n2=1,nextterm

	for (let i = 0; i <=num; i++) {
		console.log(n1)
		nextterm=n1+n2;
		n1=n2;
		n2=nextterm
	}
}

module.exports = fibonacci;
