function rentangAngka(input1, input2){
    let array = []
    for (let i = 0; i <= input2 ; i++) {
        array.push(i)
    }
    const hasil = array.slice(input1, input2 + 1)
    return hasil
}
console.log(rentangAngka(4,8));