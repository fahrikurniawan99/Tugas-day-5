function cetakGanjil(){
    let array = []
    for (let i = 1; i <= 100; i++) {
        if(i % 2 !== 0){
            array.push(i)
        }
    }
    return array.join(",")
}
console.log(cetakGanjil());