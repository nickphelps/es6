// Write an expression that uses an array prototype method (filter, reduce, map, etc.)
//   to compute the total value of the mahines in the inventory array;

const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

// Filter out things that arent machines:
// let justMachines = inventory.map((inventory) => {
//     // return inventory.type 
//     if (inventory.type === 'machine') {
//         return inventory.type
//     }
// })

let justMachines = inventory.filter(item => item.type === 'machine')
console.log(justMachines)

// Calculate the total value of the machines
let totalMachineValue = inventory.map((inventory) => {
    return inventory.value
})
var total = 0
for (let i = 0; i < totalMachineValue.length; i++) {
    total += totalMachineValue[i]
}
console.log(total)
