function async(obj) {
    const copiedObj = {...obj}
    return new Promise((resolve, reject) => {
        if (typeof obj === 'object') {
            resolve(copiedObj)
        } else {
            reject('Error')
        }
    })
}
async({name: 'Saba', age: '15'})
    .then(result => console.log(result))
    .catch(error => console.log(error))

async([1,2,3,4,5])
    .then(result => console.log(result))
    .catch(error => console.log(error))

async('string')
    .then(result => console.log(result))
    .catch(error => console.log(error))

async(123)
    .then(result => console.log(result))
    .catch(error => console.log(error))