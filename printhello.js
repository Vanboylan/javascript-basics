
const printHello = () => {
    console.log("Hello!");
}


const executeAfterDelay = (number, a_method) => {
    setTimeout(a_method, number * 1000);
}

executeAfterDelay(5, printHello);