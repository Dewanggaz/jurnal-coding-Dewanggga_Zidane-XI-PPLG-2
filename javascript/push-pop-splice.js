/**mutating
 * -push()=menambahkan nilai di index terakhir namaArray.push(nilai)
 * -pop()=menhapus nilai dari index paling akhir
 * -splice()= menambah,menghapus,mengedit di posisi tertentu
 */
let DataN = ["a",'b','c']
console.log(DataN);

DataN.push(123)
console.log(DataN);/// setelah push

DataN.pop()
console.log(DataN);// setelah pop

let DataB = [1,2,3,4,5]
DataB.splice(1,1)
console.log(DataB);// menghapus

DataB.splice(2,0,9)
console.log(DataB);// menambah



