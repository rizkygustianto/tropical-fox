// NO.2
// -----
// //test case 1:
// let angka = 359
// output: 5
// proses:
// 3 * 5 * 9 = 135 => karena hasil belum 1 digit maka kalikan hasil
// 1 * 3 * 5 = 15 => karena hasil belum 1 digit maka kalikan hasil
// 1 * 5 = 5 => hasil sudah 1 digit maka output adalah 5
// //test case 2:
// let angka = 228978
// output: 0
// proses
// 2 * 2 * 8 * 9 * 7 * 8 = 16128 => karena hasil belum 1 digit maka kalikan hasil
// 1 * 6 * 1 * 2 * 8 = 96 => karena hasil belum 1 digit maka kalikan hasil
// 9 * 6 = 54 => karena hasil belum 1 digit maka kalikan hasil
// 5 * 4 = 20 => karena hasil belum 1 digit maka kalikan hasil
// 2 * 0 = 0 => hasil sudah 1 digit maka output adalah 0

var angka = 13579
var angkaString = angka.toString()
var multiplier = 1

console.log(angka)
do {
    multiplier = 1
    for (let i = 0; i < angkaString.length; i++) {
        multiplier = multiplier * Number(angkaString[i])
    }
    console.log(multiplier)
    angka = multiplier
    var angkaString = angka.toString()
} while (multiplier.toString().length > 1);


