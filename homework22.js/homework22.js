function expo(num, pwr, cb){
    if(pwr === 0 ) return 1
    return cb(num, pwr) * expo(num, pwr - 1, cb)
}
function cb(num, pwr){
    return num
}
console.log(expo(5, 3, cb))