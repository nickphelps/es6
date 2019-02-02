// Here we have a handful of ES5 functions.
// Spice them up by converting them to arrow functions!


// let introduction = function(name, otherName) {
//     let introduction = name + ", let me introduce you to " + otherName;
//     return introduction;
// }

const introduction = (name, otherName) => {
    let introduction = name + ", let me introduce you to " + otherName;
    return introduction;
}
console.log( introduction('Nick', 'Catherine') )

// This one only has one parameter! 
// let boringFunction = function (topic) {
//     let complain = topic + " is so boooooring!!!";
//     return complain;
// }

const boringFunction = topic => {
    let complain = topic + " is so boooooring!!!";
    return complain;
}

console.log( boringFunction('ES6') )

// This one has a single return statement!
// let shout = function() {
//     return "AAAHHHH!!"
// }

const shout = () => "AAAHHHH!!"

console.log( shout() )
