/**
 * -map()= tranformasi setiap item
 * -filter() = memilih yang sesuai dengan kondisi
 * -reduce() = mengumoulkan semua nilai array menjadi satu nilai
 */

let angka= [1,4,6]
let kali = angka.map(n => n*2)
console.log(kali);// 2 8 12


const nomor= [1, 2, 3, 4, 5];

const hasil = nomor.filter(item => item > 3);

console.log(hasil); 
// [4, 5]


const data = [5, 5, 5];

const total = data.reduce((a, b) => a + b, 0);

console.log(total);
// 15
