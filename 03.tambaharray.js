function tambahKataArray(){
    const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu']
    stuff.unshift("Handuk")
    stuff.push("Celana")
    return stuff
}
console.log(tambahKataArray());