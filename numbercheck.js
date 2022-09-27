const checkLength = (phoneNumber) => {
    if (phoneNumber.length <= 10) {
        return true;
} else {return false;}}

const filterLongNumbers = (numbers) => {
    shortNumbers = numbers.filter(checkLength);
    console.log(shortNumbers);
}

const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];
  
filterLongNumbers(numbers);

filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
  
filterLongNumbers([])

