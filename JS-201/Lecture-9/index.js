// Asynchronous Javascript - II
// We will look more about Asynchronous javascript in this lecture - 9 ......
let getBtn = document.getElementById("fetchBtn");
let mainContainer = document.getElementById("recipes");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let page = 1;
let limit = 6

function limitAndpage(page) {
    const skip = (page - 1) * limit;
    fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data.recipes) // complete data
            let neededData = data.recipes.map((el) => {
                return {
                    title: el.name,
                    image: el.image,
                    rating: el.rating
                }
            })
            console.log(neededData) // required data or filtered data..>
            mainContainer.innerHTML = ""
            neededData.forEach(el => {
                let card = document.createElement("div");
                card.className = "recipe-card"
                card.innerHTML = `
                <img src="${el.image}" alt="${el.name}" class="recipe-image">
            <div class="recipe-content">
               <div class="recipe-title">${el.title}</div>
                <div class="rating">${el.rating} ⭐ </div>
            </div>
                `
                mainContainer.append(card)

            });



        }).catch((err) => {
            console.error("Error fetching recipes:", err);
            mainContainer.innerHTML = `<p style="color:red;">Failed to load recipes. Try again later.</p>`;
        });
}


getBtn.addEventListener("click", () => {
    page = 1;
    limitAndpage(page)
})

prevBtn.addEventListener("click", () => {
    if (page > 1) {
        page -= 1;
        limitAndpage(page);
    }
});
nextBtn.addEventListener("click", () => {

    page += 1;
    limitAndpage(page)

})









