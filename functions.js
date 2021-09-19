const sum = (a, b) => a + b;
const greeting = (message = "Hello World") => message;
const reverseWord = (message = "hello") => {
    if(typeof message === "string"){
        return message.split("").reverse().join("")
    }
    throw new Error("The value is not a string");
}

function getAname(name){
    return new Promise((resolve, reject) => {
        typeof name === "string" ? resolve(name) : reject("it is null or there is not a name in it");
    })
}

module.exports = {
    sum,
    greeting,
    reverseWord,
    getAname
};