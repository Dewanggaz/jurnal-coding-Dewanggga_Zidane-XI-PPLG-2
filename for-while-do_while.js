/**
 * looping for adalah salah satu tipe perulangan di js yang dimana dia akan terus melakukan perulangan kalau kondisi nya mmasi true dan akan berhenti kalau kondisi nya false
 */

for(i = 1 ; i <= 10 ; i++){
    console.log(`ini adalah looping for ${i}`);
    
}
console.log("");
console.log("ini adalah contoh perulangan for");
console.log("");

/**
 * looping while adalah perulangan dimana dia bakal terus mengulang selagi kondisinya true dan akan berhenti kalau false
 * bedanya dengan for adalah while adalah perulangan yang di gunakan kalau kita gatau mau sampe berapa kita bakal looping sedangkan for itu di gunakan kalau ki sudah tau berapa kali kita melakukan looping 
 */
let a = 1

while (a <= 5 ) {
    console.log(`ini adalah looping while ${a}`);
    a++
}
console.log("");
console.log("ini adalah contoh perulangan while");
console.log("");

/**
 * do while adlah salah satu perulangan yang di mana dia bakal mencetak/menjalankan kode nya dulu baru di bandingkan kalau dia masi true dia bakal jalan kalau false berhenti
 */
let z = 1
do{
    console.log(`ini adalah looping do while ${z}`);
    z++
}while(z <= 10)