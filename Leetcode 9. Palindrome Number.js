/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let num =x, rev=0;
    while(num >0){
        let d = num%10;
        rev= (rev*10)+d;
        num = Math.trunc(num/10);
    }
    console.log(rev);
    return rev === x
};

Time Complexity - O(log x)
Space Complexity - O(1)
