let search = document.getElementById("search");
let productList = document.getElementById("product-list");
let global = JSON.parse(localStorage.getItem("products"));
if (global === null || global.length === 0) {
    fetchProducts();
} else {
    domElements(global)
}
async function fetchProducts() {
    let resObj = await fetch("https://fakestoreapi.com/products");
    let newdata = await resObj.json();
    global = newdata.map((el) => {
        let myObj = {
            image: el.image,
            product: el.title,
            price: el.price,
            category: el.category
        }
        return myObj;
    })
    domElements(global);
    localStorage.setItem("products", JSON.stringify(global))
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
        card.append(image, title, price, category);
        productList.append(card);
    });
}

search.addEventListener("input", (e) => {
    let keyword = search.value.toLowerCase();
    let filtered = global.filter(prod =>
        prod.product.toLowerCase().includes(keyword) ||
        prod.price.toString().includes(keyword)
    );
    if (keyword === "") {
        domElements(global);
    } else {
        filterData(filtered);
    }
})

function filterData(val) {
    domElements(val)
}





