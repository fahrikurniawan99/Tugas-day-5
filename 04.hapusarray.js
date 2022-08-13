function hapusArray(){
    const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']
    fruits.splice(2, 1)
    return fruits
}
console.log(hapusArray());