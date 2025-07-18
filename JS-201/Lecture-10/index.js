// https://www.notion.so/vivmagarwal/Async-Javascript-Class-9-10-11-4847102033934073aa05e2a57bfaf193
let balance = 5000;
let main = document.getElementById("main");
let amountHeading = document.getElementById("amount")
let input = document.getElementById("amt");
let payBtn = document.getElementById("pay-btn");
let code = document.getElementById("code");
let pre = document.getElementById("msg")


amountHeading.innerText = `Current Balance :  ${balance}`;
function payment(val) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val == 0) {
                 input.style.border = "1px solid red"
                reject("Payment failed 😣, input amount is null")
           
            }
            if (val <= balance) {
                balance -= val;
                resolve({ msg: "Payment Successful 😁", current: balance })

            } else {
                input.style.border = "1px solid red"
                reject("Payment failed 😣")
            }

        }, 2000)
    })
    return promise;

}


payBtn.addEventListener("click", () => {
    let inputAmmount = Number(input.value);
    payment(inputAmmount).then((res) => {
        amountHeading.innerText = `Current Balance : ${res.current}`;
        pre.innerText = res.msg;
        code.append(pre)
        console.log(msg)
    }).catch((err) => {
        pre.innerText = err;
        code.append(pre)
        console.log(err)
    })

})












