/*
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const isPrime= new Array(n).fill(true);
    let count=0;
    isPrime[0]= false;
    isPrime[1]= false;

    for(let i=2; i*i<n; i++){
        if(isPrime[i]){
            for(let j=i*i; j<n; j +=i){
                isPrime[j]= false;
            }
        }
    }

    for(let i=0; i<isPrime.length; i++){
        if(isPrime[i]){
            count++;
        }
    }
   
   return count;
};

Sieve of Eratosthenes Algorithm
Time Complexity- O( n log log n)
Space Complexity- O(n)
