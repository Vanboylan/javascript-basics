const generateMessages = (array) => {
    newArray = array.map(message);
    return newArray;
}

const message = (object) => {
    return `Hi ${object.name} ${object.discount}% off our best candies for you today!`;
}


const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

console.log(generateMessages(namesAndDiscounts));


