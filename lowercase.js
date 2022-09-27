const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (a_string, b_function) => {
    return b_function(a_string);
}

console.log(transform('WHY ARE YOU SHOUTING?', lowercaseMessage));
