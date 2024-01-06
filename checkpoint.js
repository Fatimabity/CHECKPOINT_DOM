const moins = document.querySelector(".moins")

let TOTAL1 = 0
let TOTAL2 = 0
let TOTAL3 = 0

let Like1 = false;
let Like2 = false;
let Like3 = false;

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

    let totPrice = document.querySelector(".totPrice")
    let price = document.querySelector(".price")
    totPrice.innerHTML = 10000*incrémenter
    TOTAL1 = 10000*incrémenter
    updateTotal();
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

    let totPrice1 = document.querySelector(".totPrice1")
    let price = document.querySelector(".price")
    totPrice1.innerHTML = 10000*incrémenter
    TOTAL2 = 10000*incrémenter
    updateTotal();
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

    let totPrice2 = document.querySelector(".totPrice2")
    let price = document.querySelector(".price")
    totPrice2.innerHTML = 10000*incrémenter
    TOTAL3 = 10000*incrémenter
    updateTotal();
})

const prixU = document.querySelector("prixu")
prixU.addEventListener("click", () =>{
    let quantité =document.querySelector(".Quantités")
    let prixI =document.querySelector(".price")
    let prix = parseInt(prixI.innerText)
    let prisF = prix*quantité
    prixI.innerHTML = prisF
})


function updateTotal() {
    const total = document.querySelector(".total");
    total.innerHTML = TOTAL1 + TOTAL2 + TOTAL3;
 }


const supprimerButtons = document.querySelectorAll(".supprimer");

supprimerButtons.forEach((supprimerButton) => {
    supprimerButton.addEventListener("click", () => {
       
        TOTAL1 = 0;
        TOTAL2 = 0;
        TOTAL3 = 0;

       
        updateTotal();
    });
});




function toggleLike(productNumber) {
    let isLiked = false;
    switch(productNumber) {
        case 1:
            isLiked = !Like1;
            break;
        case 2:
            isLiked = !Like2;
            break;
        case 3:
            isLiked = !Like3;
            break;
    }
    updateLikeButton(productNumber, isLiked);
 }
 
 function updateLikeButton(productNumber, isLiked) {
    let likeButton = document.getElementById(`likeBtn${productNumber}`);
    let likeIcon = likeButton.querySelector('i');
    if (isLiked) {
        likeIcon.className = 'fas fa-heart';
    }
 }
 