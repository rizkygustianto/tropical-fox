var num = 7
var topBottom = ""
var outputString = ""

for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        if (i == 0 || i == (num - 1)) {
            outputString += "#"
        } else {
            if (j == 0 || j == (num - 1)) {
                outputString += "|"
            } else {
                outputString += " "
            }
        }
    }
    outputString += "\n"
}
console.log(outputString)


// for (let i = 0; i <= num; i++) {
//     topBottom += "#"
// }


// console.log(topBottom)
// for (let j = 0; j <= num - 2; j++) {
//     space += " "    
// }
// for (let j = 0; j <= num - 3; j++) {
//     console.log("|" + space + "|")   
// }
// console.log(topBottom)

