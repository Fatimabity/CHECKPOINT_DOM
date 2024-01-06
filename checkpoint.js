const moins = document.querySelector(".moins")
moins.addEventListener("click", () =>{
    let quantité= document.querySelector(".zéro")
    let qte = parseInt(quantité.innerText)
    let incrémenter = qte-1
    quantité.innerHTML = incrémenter
})

const plus = document.querySelector(".plus")
plus.addEventListener("click", () => {
    let quantité=document.querySelector(".zéro")
    let qte = parseInt(quantité.innerText)
    let incrémenter = qte+1
    quantité.innerHTML = incrémenter
})

const MOINS = document.querySelector(".MOINS")
MOINS.addEventListener("click", () =>{
    let quantité= document.querySelector(".ZERO")
    let qte = parseInt(quantité.innerText)
    let incrémenter = qte-1
    quantité.innerHTML=incrémenter
})

const PLUS = document.querySelector(".PLUS")
PLUS.addEventListener("click", () => {
    let quantité=document.querySelector(".ZERO")
    let qte = parseInt(quantité.innerText)
    let incrémenter = qte+1
    quantité.innerHTML = incrémenter
})

const sub = document.querySelector(".sub")
sub.addEventListener("click", () =>{
    let quantité= document.querySelector(".zero")
    let qte = parseInt(quantité.innerText)
    let incrémenter = qte-1
    quantité.innerHTML=incrémenter
})

const add = document.querySelector(".add")
add.addEventListener("click", () => {
    let quantité=document.querySelector(".zero")
    let qte = parseInt(quantité.innerText)
    let incrémenter = qte+1
    quantité.innerHTML = incrémenter
})

const prixU = document.querySelector("prixu")
prixU.addEventListener("click", () =>{
    let quantité =document.querySelector(".Quantités")
    let prixI =document.querySelector(".price")
    let prix = parseInt(prixI.innerText)
    let prisF = prix*quantité
    prixI.innerHTML = prisF
})
let isLiked = false;

        function toggleLike() {
            isLiked = !isLiked;
            updateLikeButton();
        }

        function updateLikeButton() {
            const likeButton = document.getElementsByClassName('coeur');
            likeButton.textContent = isLiked ? 'Liked' : 'Like';
            likeButton.style.color = isLiked ? 'blue' : 'black';
        }