// just promise and it's .then and .catch methods clearification lecture...

function returnPromise(num) {
    let promise = new Promise(function (res, rej) {
        setTimeout(() => {
            if (num >= 50) {
                res("promise resolved")
                console.log(num)
            } else {
                rej("promise rejected")
            }
        }, 2000)
    })
    return promise;
}

let res = returnPromise(106);
res.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err)
})













