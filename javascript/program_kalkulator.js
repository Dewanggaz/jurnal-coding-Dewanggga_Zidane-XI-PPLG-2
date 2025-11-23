let prompt = require("prompt-sync")()

let angka1 = Number(prompt("masukan angka : "))
let operasi = prompt("masukan operator + - * / : ")
let angka2 = Number(prompt("masukan angka :"))

let hasil;

switch (operasi) {
    case "+":
        hasil = angka1 + angka2 
        break;
     case "-":
        hasil = angka1 - angka2 
        break;
     case "*":
        hasil = angka1 * angka2 
        break;
     case "/":
        hasil = angka1 / angka2 
        break;
    default:
        console.log('operator salah');
        
        break;
}
console.log( `hasil ${hasil}`);
