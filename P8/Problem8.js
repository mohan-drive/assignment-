'use strict';

function printFibonacci(n) {
	if (n===1) 
    {
    return [0, 1];
    } 
    else 
    {
    var s = printFibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
    }
    
}
console.log(...printFibonacci(4));
console.log(...printFibonacci(5));