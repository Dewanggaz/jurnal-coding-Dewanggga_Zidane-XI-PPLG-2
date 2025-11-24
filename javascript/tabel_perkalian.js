let prompt = require("prompt-sync")()

let angka = Number(prompt("masukan jumlah angka : "))

for(i = 1 ; i <= 10 ; i++){
    console.log(`${angka}  X ${i} = ${angka * i} `);
    
    
}