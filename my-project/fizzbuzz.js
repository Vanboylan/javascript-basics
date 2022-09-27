const fizzBuzz = (num) => {
    if (num%3 === 0 && num%5 === 0) {
        return 'FizzBuzz';}
    else if (num%3 === 0) {
        return 'fizz';}
    else if (num%5 === 0) {
        return 'buzz';}
    else {return num;}
    }

const fizzBuzzUntil = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(fizzBuzz(i));
        }
}

//module.exports = fizzBuzzUntil;
module.exports = fizzBuzz;