/*
if...else = mengeksekusi sebuah statement if akan berjalan saat kondisi nyaa true
dan kalo else terjadi kalo kondisi nya false maka else akan muncul
*/
console.log("========if....else=======");

let number = 17

if (number < 15) {
    number += 3
    console.log(number);
    
}else{
    console.log(number -= 5);
    
}



console.log("========switch=======");

/**
 * switch = mencocokan atau mengevaluasi suatu expresi atau pernyataan dengan suatu case dan akan terus mencocokan sampai ketemu yang namanya break
 * 
 */

const buah = "jeruk"
switch (buah) {
    case "nanas":
        console.log("harga 5rb");
        
        break;

    default:console.log("gaada buah itu");
    
        break;
}