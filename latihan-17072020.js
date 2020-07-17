/**
 * =============
 * Array Mastery
 * =============
 * 
 * 1. Buatlah function indexOf manual, function akan menerima 2 paramater array dan element yang dicari, dan mengembalikan index dari element tersebut, jika ada 2 element yang sama maka yang akan dikembalikan index yang pertama
 * contoh: console.log(indexOfManual([4, 7, 'kucing', 1, 3, 'kucing', 5], 'kucing'))
 * output: 2
 * * contoh: console.log(indexOfManual([4, 7, 'kucing', 1, 3, 'kucing', 5], 'naga'))
 * output: -1
 * 
 * 2. Buatlah function majoritySweeper yang akan menghilangkan angka yang sering muncul pada suatu array
 * contoh: console.log(majoritySweeper([4,4,4,4,1,2,3,3,7]))
 * output: [1,2,3,3,7]
 * 
 * 3. Buatlah function duplicateSweeper yang akan menghilangkan nilai duplikat pada suatu array
 * contoh: console.log(duplicateSweeper([4,4,1,2,3,4,3,7,4]))
 * output: [4,1,2,3,7]
 * 4. function 1 parameter berupa number
 *  [
 *     input: 3
 *   [ 7, 8, 9 ],
 *   [ 6, 5, 4 ],
 *   [ 1, 2, 3 ]
 * ]
 * input: 4
 * [
 *   [ 16, 15, 14, 13 ],
 *   [ 9, 10, 11, 12 ],
 *   [ 8, 7, 6, 5 ],
 *   [ 1, 2, 3, 4 ],
 * ]
 **/


// NOMOR 1 
function indexOfManual (arr, input) {
    let index = undefined
    for (let i = 0; i < arr.length; i++) {
        if (input == arr[i]) {
            index = i
            break
        }
    }
    if (index == undefined) {
        index = -1
    }
    return index
}
console.log(indexOfManual([4, 7, 'kucing', 1, 3, 'kucing', 5], 'kucing'))
console.log(indexOfManual([4, 7, 'kucing', 1, 3, 'kucing', 5], 'naga'))


//NOMOR 2
function majoritySweeper (arr) {
    let range = [0,0,0,0,0,0,0,0,0,0] // assume number is 1-9, position counter according to coordinates
    for (let i = 0; i < arr.length; i++) { // loop for the arr coordinate
        for (let j = 0; j < 10; j++) { // loop for the 1-9 number
            if (arr[i] == j) { 
                range[j] += 1 // add a tally for every number
            }
        }
    }

    let max = range[0] // initialize range scan
    let maxIndex = 0 // define max value index
    for (let i = 0; i < range.length; i++) { // loop through range
        if (range[i] > max) { //  compare each array element with the next, and flag the index of the biggest
            maxIndex = i
            max = range[i]
        }
    }
    
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== maxIndex) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(majoritySweeper([4,4,4,4,1,2,3,3,7]))

// NOMOR 3
function duplicateSweeper (arr) {
    let result = [...new Set(arr)]
    return result
}

console.log(duplicateSweeper([4,4,1,2,3,4,3,7,4]))

// NOMOR 4
function inverseMatrix (num) {
    let arr = []
    let indomie = 1
    for (let i = 0; i < num; i++) {
        arr[i] = []
        for (let j = 0; j < num; j++) {
            arr[i].push(indomie)
            indomie++
        }
    }
    let result = []
    for (let i = num-1; i >= 0; i--) {
        result.push(arr[i])
    }

    return result
}

console.log(inverseMatrix(4))
