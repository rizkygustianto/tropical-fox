let hourGlass = 9
let hourGlassElement = (hourGlass * 2) - 2
let outputString = ""

for (let i = 0; i < hourGlass; i++) {
    if (i > 0) {
        for (let space = 0; space < i; space++) {
            outputString += " "
        }
    }
    for (let j = hourGlassElement; j >= 0; j--) {
        outputString += "#"
    }
    outputString += "\n"
    hourGlassElement -= 2
}
hourGlassElement = 1

for (let k = hourGlass - 1; k > 0; k--) {
    hourGlassElement += 2
    if (k > 1) {
        for (let space = 0; space <= k - 2; space++) {
            outputString += " "
        }
    }
    for (let j = 0; j < hourGlassElement; j++) {
        
        outputString += "#"
    }
    outputString += "\n"
}
console.log(outputString)
