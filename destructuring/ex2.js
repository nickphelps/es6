let array = [
    "blue",
    "green",
    "red",
    "pink",
    "orange",
    "yellow"
] 
// Using destructuring, and in one line of code, 
//  create 2 variables that extract blue, green, and pink

let [blue, green, , pink, , ] = array
    array[0] = 'black'
    console.log(array)