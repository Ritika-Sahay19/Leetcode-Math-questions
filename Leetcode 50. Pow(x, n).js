/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n <0){
        x= 1/x;
        n= -n;
    }

    if(n ==0){
        return 1; 
    }

    const half= myPow(x, Math.floor(n/2));

    if(n %2 ==0){
        return half* half;
    }
    else{
        return x * half * half;
    }
};

Time Complexity - O(log n)
Space Complexity - O(log n)
