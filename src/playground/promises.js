const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'wajdi',
            age: 32
        })
        reject('something went wrong !!!')
    }, 5000)
})
console.log('befor')
promise.then((data) => {
    console.log('1', data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('watashi no other yaksuku')
        }, 5000)
    })
}).then((str) => {
    console.log('does this run?', str)
}).catch((error) => {
    console.log('error: ', error)
})

console.log('after')
