/*
let adalah : The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
atau mendeklarasikan variabel yang dapat ditetap kan ulang dalam block scope untuk menghasilkan suatu nilai

*/
let x = 10
if (x === 10) {
    let x = 2
    console.log(x);///outputnya 2
    
}
console.log(x);//outputnya 10



// function myFungtion() {
//     if(true){
//         let z = 10// z berada di dalam scope ({})
//         console.log(z);/// output nya 10
        
//     }
//     console.log(z);// akan muncul eror di karenakan mengakses di luar scope ({})
    
// }
// myFungtion()



console.log("=====================================================================" );
/*

const = menegaskan suatu nilai yang sudah tetap atau konstan atau apabila suatu variable di deklarasikan dengan const maka variable tersebut tidak dapat
di tetapkan ulang kenilai lain 

*/


const gaji = 1000
//gaji = 1200 // eror karena mencoba menegaskan kembali / mengubah nilai yang sudah di tetapkan
console.log(gaji);




console.log("===========================================");
/*
operator = semacam simbol seperti tanda baca yang meniliki fungsi khusus seprti =,-,+,!
operator ada = aritmatika,penugasan,logika,perbandingan 
*/

let v = 12
let y = 4
//aritmatika
console.log(v + y);
console.log(v - y);
console.log(v / y);
console.log(v * y);
console.log(v % y);
console.log(v ** y);
let o = 3; o++
let p = 2; p--
console.log(o);
console.log(p);

//penugasan

console.log(y += 3);
console.log(y *= 3);
console.log(y -= 3);
console.log(y /= 3);
console.log(y %= 3);
console.log(y = 3);

//perbandingan
let a = 5
let b = 2
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a >= b);
console.log(a <= b);
console.log(a < b);
console.log(a > b);

//logika

console.log((v > a) && (y>b)); // kedua kondisi harus true
console.log((v > a) || (y<b)); // salah satu saja yang true
console.log( !!(y<b)) //false









