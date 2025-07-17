// Asynchronous Javascript - I
// just promise and it's .then and .catch methods clearification lecture...
// reffere this link to understand more about Asynchronous Javascript - I
//  ----- >     https://www.notion.so/vivmagarwal/Async-Javascript-Class-9-10-11-4847102033934073aa05e2a57bfaf193


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













