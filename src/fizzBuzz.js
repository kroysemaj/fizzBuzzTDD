function fizzBuzz(n) {
    let result = n;
    if (n % 15 === 0) {
        result = "FizzBuzz";
    } else if(n % 3 === 0) {
        result = "Fizz";
    } else if (n % 5 === 0) {
        result = "Buzz";
    }
    
    return result;
}



module.exports = fizzBuzz;