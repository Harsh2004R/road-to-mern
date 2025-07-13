// cart.js
let cartList = document.getElementById("cart-list");
let clearCart = document.getElementById("clear-cart");


// Card listing or formation will be done here....

let LSCart = JSON.parse(localStorage.getItem("cart"));
if (LSCart == null || LSCart.length == 0) {
    const div = document.createElement("div");
    div.innerText = "No Product are available to show in cart"
    cartList.append(div);
} else {
    createCart(LSCart)
}

function createCart(LSCart) {
    cartList.innerHTML = ""
    LSCart.forEach(element => {
        let card = document.createElement("div");
        card.style.border = "2px solid #DADADA"

        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        image.style.width = "150px";
        image.style.height = "150px";
        let title = document.createElement("h2");
        title.innerText = element.product;
        let price = document.createElement("h4");
        price.innerText = element.price;
        let category = document.createElement("p");
        category.style.color = "rgba(18, 82, 179, 1)"
        category.innerText = element.category
        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.addEventListener("click", () => {
            alert("Your item has been deleted from the cart")
            let updatedCart = LSCart.filter(item => item !== element);
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            window.location.reload();
            createCart(updatedCart)
        })



        card.append(image, title, price, category, btn);
        cartList.append(card)

    });

}


let productList = document.getElementById("product-list");
let global = JSON.parse(localStorage.getItem("products"));

if (global == null || global.length == 0) {
    const div = document.createElement("div");
    div.innerText = "No Product is available to add in cart"
    productList.append(div);
} else {
    domElements(global)
}
function domElements(data) {
    productList.innerHTML = ""
    data.forEach(element => {
        let card = document.createElement("div");
        card.style.border = "2px solid #DADADA"

        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        image.style.width = "150px";
        image.style.height = "150px";
        let title = document.createElement("h2");
        title.innerText = element.product;
        let price = document.createElement("h4");
        price.innerText = element.price;
        let category = document.createElement("p");
        category.style.color = "rgba(18, 82, 179, 1)"
        category.innerText = element.category
        let btn = document.createElement("button");
        btn.innerText = "Add to Cart"
        let product = element
        btn.addEventListener("click", () => {
            alert("Your item is added to the cart")
            let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
            cartArray.push(product);
            localStorage.setItem("cart", JSON.stringify(cartArray))
            window.location.reload();
        })
        card.append(image, title, price, category, btn);
        productList.append(card);
    });
}




