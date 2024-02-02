let TOTAL1 = 0
let TOTAL2 = 0
let TOTAL3 = 0

let Like1 = false;
let Like2 = false;
let Like3 = false;


//fonction pour calculer les sous-prix du premier sac//
const moins = document.querySelector(".moins")
moins.addEventListener("click", () => {
    let quantité = document.querySelector(".zéro")
    if (parseInt(quantité.innerText) >= 1) {
        let qte = parseInt(quantité.innerText)
        let incrémenter = qte - 1
        quantité.innerHTML = incrémenter  
    }
   

    let totPrice = document.querySelector(".totPrice")
    let price = document.querySelector(".price")
    totPrice.innerHTML = 6000 * incrémenter
    TOTAL1 = 6000 * incrémenter
    updateTotal();
})


const plus = document.querySelector(".plus")
plus.addEventListener("click", () => {
    let quantité = document.querySelector(".zéro")
    let qte = parseInt(quantité.innerText)
    let incrémenter = qte + 1
    quantité.innerHTML = incrémenter

    let totPrice = document.querySelector(".totPrice")
    let price = document.querySelector(".price")
    totPrice.innerHTML = 6000 * incrémenter
    TOTAL1 = 6000 * incrémenter
    updateTotal();
})

//fonction pour calculer les sous-prix du deuxiéme sac//
const MOINS = document.querySelector(".MOINS")
MOINS.addEventListener("click", () => {
    let quantité = document.querySelector(".ZERO")
    if (parseInt(quantité.innerText)) {
        let qte = parseInt(quantité.innerText)
        let incrémenter = qte - 1
        quantité.innerHTML = incrémenter
    }
   
    let totPrice1 = document.querySelector(".totPrice1")
    let price = document.querySelector(".price")
    totPrice1.innerHTML = 8000 * incrémenter
    TOTAL2 = 8000 * incrémenter
    updateTotal();
})

const PLUS = document.querySelector(".PLUS")
PLUS.addEventListener("click", () => {
    let quantité = document.querySelector(".ZERO")
    let qte = parseInt(quantité.innerText)
    let incrémenter = qte + 1
    quantité.innerHTML = incrémenter

    let totPrice1 = document.querySelector(".totPrice1")
    let price = document.querySelector(".price")
    totPrice1.innerHTML = 8000 * incrémenter
    TOTAL2 = 8000 * incrémenter
    updateTotal();
})

//fonction pour calcuelr les sous-prix du troisiéme sac//
const sub = document.querySelector(".sub")
sub.addEventListener("click", () => {
    let quantité = document.querySelector(".zero")
    if (parseInt(quantité.innerText)) {
        let qte = parseInt(quantité.innerText)
        let incrémenter = qte - 1
        quantité.innerHTML = incrémenter
    }

    let totPrice2 = document.querySelector(".totPrice2")
    let price = document.querySelector(".price")
    totPrice2.innerHTML = 9000 * incrémenter
    TOTAL3 = 9000 * incrémenter
    updateTotal();
})

const add = document.querySelector(".add")
add.addEventListener("click", () => {
    let quantité = document.querySelector(".zero")
    let qte = parseInt(quantité.innerText)
    let incrémenter = qte + 1
    quantité.innerHTML = incrémenter

    let totPrice2 = document.querySelector(".totPrice2")
    let price = document.querySelector(".price")
    totPrice2.innerHTML = 9000 * incrémenter
    TOTAL3 = 9000 * incrémenter
    updateTotal();
})

//fonction pour calculer le prix total des sacs//
function updateTotal() {
    const total = document.querySelector(".total");
    total.innerHTML = TOTAL1 + TOTAL2 + TOTAL3;
}

//fonction like un sac//
var btn = document.getElementById('likeBtn1');
function toggle1() {
    if (likeBtn1.classList.contains("far")) {
        likeBtn1.classList.remove("far");
        likeBtn1.classList.add("fas");
    } else {
        likeBtn1.classList.remove("fas");
        likeBtn1.classList.add("far");
    }
}

var btn = document.getElementById('likeBtn2');
function toggle2() {
    if (likeBtn2.classList.contains("far")) {
        likeBtn2.classList.remove("far");
        likeBtn2.classList.add("fas");
    } else {
        likeBtn2.classList.remove("fas");
        likeBtn2.classList.add("far");
    }
}

var btn = document.getElementById('likeBtn3');
function toggle3() {
    if (likeBtn3.classList.contains("far")) {
        likeBtn3.classList.remove("far");
        likeBtn3.classList.add("fas");
    } else {
        likeBtn3.classList.remove("fas");
        likeBtn3.classList.add("far");
    }
}

//fonction pour supprimer un sac//
function deletearticle1() {
    var deletearticle = document.getElementById("flex");
    deletearticle.remove()   
}

function deletearticle2() {
    var deletearticle = document.getElementById("flex");
    deletearticle.remove()  
}

function deletearticle3() {
    var deletearticle = document.getElementById("flex");
    deletearticle.remove()
}




