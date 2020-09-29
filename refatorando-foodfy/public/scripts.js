// manipulando os cards

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
for (let card of cards) {
    card.addEventListener("click", function(){
        const recipeImg = card.querySelector(".card img").src
        const recipeTitle = card.querySelector(".card .title").innerHTML
        const recipeAuthor = card.querySelector(".card .author").innerHTML
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = recipeImg
        modalOverlay.querySelector("p.title").innerHTML = recipeTitle
        modalOverlay.querySelector("p.author").innerHTML = recipeAuthor

    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ""
    modalOverlay.querySelector("p.title").innerHTML = ""
    modalOverlay.querySelector("p.author").innerHTML = ""
})

