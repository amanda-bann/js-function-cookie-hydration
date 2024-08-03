// no parmeters
var startMyDay = function () {
    return "Time for coffee and a pup walk!";
};

console.log(startMyDay());


// one parameter
var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie());
console.log(favoriteCookie("oatmeal chocolate chip"));

// two parameters
var introduce = function (name, occupation) {
    return `My name is ${name} and I am a ${occupation}.`;
};

console.log(introduce("Amanda", "web developer"));
console.log(introduce("Tek", "rompy puppy"));

// capture input with prompt and conditional - used readline for local vsCode as prompt is not available
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var hydrationFeedback = function () {
    rl.question("How many glasses of water have you had today? ", function(numGlasses) {
        numGlasses = Number(numGlasses);
        // var numGlasses =  Number(
    //     prompt("How many glasses of water have you had today? ")
    // );
        if (numGlasses >= 8) {
        console.log("Way to stay hydrated! Keep it up!"); 
         } else  if (numGlasses < 8) {
        console.log("Getting there. Try to drink more water tomorrow.");
    }
    rl.close();
});
};

hydrationFeedback();
