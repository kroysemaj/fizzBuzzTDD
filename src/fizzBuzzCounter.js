const fizzBuzz = require("./fizzBuzz");

function fizzBuzzCounter(n){
    const answer = [];
    for(let i=1; i<=n; i++){
        answer.push(fizzBuzz(i));
    }
    return answer;
}

module.exports = fizzBuzzCounter;