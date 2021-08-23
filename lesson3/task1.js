var i = 0;
var j = 0;
var n = 0;
var primes = [2];

while (j < 100) {
	isPrime = true;	

	while (n < primes.length) {			 		
		if (j % primes[n] == 0) {
			isPrime = false;
			break;
		}		
		n++;
	}
	
	if (isPrime) {
		primes.push(j);
	}		
	
	n = 0;				
	j = i++ * 2 + 1;
	j = (j == 1) ? (i * 2 + 1) : j;	
}

console.log(primes)