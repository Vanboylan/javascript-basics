const evenOdd = (num) => {
    if (num%2 === 0 && num > 1) {
        console.log('even');
    } else if (num%2 === 1 && num > 0) {
        console.log('odd');
    } else if (num === 1) {
        console.log('odd');
    } else if (num === 0) {
        console.log('even');
    }
}

for (let i = 0; i <= 20; i++) {console.log(i);evenOdd(i);}

