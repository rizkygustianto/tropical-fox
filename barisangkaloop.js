// NO.1
// -----
// //test case 1
// let angka = 5
// output:
// 1 2 3 4 $
// 6 7 8 9 $
// 11 12 13 14 $
// 16 17 18 19 $
// 21 22 23 24 $
// //test case 2
// let angka = 3
// 1 2 $
// 4 5 $
// 7 8 $

let angka = 5
let row = ""
for (let i = 1; i <= angka * angka; i++) {
    if (i % angka === 0) {
        row += "$ \n"
    } else {
        row += i.toString() + " "
    }
}
console.log(row)