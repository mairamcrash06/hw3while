var htmlTeg = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var tegObject = {}
for (var i = 0; i < htmlTeg.length; i++) {
    var currentTeg = htmlTeg[i]
    if (tegObject.hasOwnProperty(currentTeg)) {
        tegObject[currentTeg] += 1
    } else {
        tegObject[currentTeg] = 1
    }
}
console.log(tegObject);

console.log(Object.keys(tegObject).sort((t1, t2) => tegObject[t2] - tegObject[t1]));
///

const originalArray = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
const newArray = [];

for (const number of originalArray) {
    const strNumber = number.toString();
    if (strNumber.startsWith('2') || strNumber.startsWith('5')) {
        newArray.push(number);
    }
}

console.log(newArray); 
