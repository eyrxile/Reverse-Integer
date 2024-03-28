var reverse = function(x) {
    const isNegative = x < 0;
    let reversed = 0;

    x = Math.abs(x);

    while(x > 0){
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    if(reversed > 2**31 - 1 || reversed < -(2**31)){
        return 0;
    }
    return isNegative ? -reversed : reversed;
};

//Example usage:
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));