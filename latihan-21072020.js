/**
 * =================
 * Box of alphabet
 * =================
 *
 * Terdapat sebuah fungsi yang akan membuat sebuah array multi dimensi dengan jumlah baris dan kolom yang diminta oleh user.
 *
 * Pada setiap elementnya kita akan memasukkan huruf alphabet berurutan dari A hingga Z.
 * Pengisian huruf dimulai dari baris pertama dari kiri ke kanan, ketika baris pertama sudah terisi dengan huruf huruf alfabet,
 * maka pengisian dimulai dari baris kedua paling kiri dan bergerak ke kanan dan seterusnya.
 *
 * Ketika huruf sudah mencapai huruf Z maka element selanjutnya akan diisi oleh huruf A lagi dan seterusnya.
 *
 * Rules:
 * - Hanya boleh menggunakan built in function push()
 *
 */

function boxOfAlphabet(row, col) {
  // Insert your code here
}

console.log(boxOfAlphabet(2, 2))
/**
 * [
 *  ['a', 'b'],
 *  ['c', 'd']
 * ]
 */
console.log(boxOfAlphabet(3, 4))
/**
 *  [
 *   ['a', 'b', 'c', 'd'],
 *   ['e', 'f', 'g', 'h'],
 *   ['i', 'j', 'k', 'l'],
 * ]
 */
console.log(boxOfAlphabet(6, 5))
/**
 * [
 *   ['a', 'b', 'c', 'd', 'e'],
 *   ['f', 'g', 'h', 'i', 'j'],
 *   ['k', 'l', 'm', 'n', 'o'],
 *   ['p', 'q', 'r', 's', 't'],
 *   ['u', 'v', 'w', 'x', 'y'],
 *   ['z', 'a', 'b', 'c', 'd']
 * ]
 */


 /**
 * =========
 * Minum obat
 * ==========
 *
 * Terdapat sebuah fungsi bernama minum obat yang akan menerima dua parameter
 * -> parameter pertama adalah sebuah nama dari obat yang harus diminum oleh seorang pasien
 * -> parameter kedua adalah sebuah interval setiap berapa hari obat tersebut harus diminum
 *
 *
 * Fungsi ini akan menghasilkan object yang berisikan  jadwal minum obat seorang pasien selama satu minggu ( dari senin hingga minggu )
 *
 * ex:
 *
 * nama obat -> paracetamol
 * interval -> 2 ( obat diminum setiap 2 hari sekali)
 *
 * maka output nya adalah
 *
 * {
 *  senin: 'minum obat paracetamol',
 *  selasa: 'tidak ada obat yang harus diminum',
 *  rabu: 'minum obat paracetamol',
 *  kamis: 'tidak ada obat yang harus diminum',
 *  jumat: 'minum obat paracetamol',
 *  sabtu: 'tidak ada obat yang harus diminum',
 *  minggu: 'minum obat paracetamol',
 * }
 *
 *
 */
function minumObat(name, interval) {
    // Insert your code here
  }
  console.log(minumObat('paracetamol', 2))
  /**
   * {
   *  senin: 'minum obat paracetamol',
   *  selasa: 'tidak ada obat yang harus diminum',
   *  rabu: 'minum obat paracetamol',
   *  kamis: 'tidak ada obat yang harus diminum',
   *  jumat: 'minum obat paracetamol',
   *  sabtu: 'tidak ada obat yang harus diminum',
   *  minggu: 'minum obat paracetamol',
   * }
   */
  console.log(minumObat('antimo', 1))
  /**
   * {
   *  senin: 'minum obat antimo',
   *  selasa: 'minum obat antimo',
   *  rabu:  'minum obat antimo',
   *  kamis: 'minum obat antimo',
   *  jumat: 'minum obat antimo',
   *  sabtu: 'minum obat antimo',
   *  minggu: 'minum obat antimo',
   * }
   */