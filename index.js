let titulo = document.getElementById("titulo")

let adiciona = document.getElementById("adiciona").addEventListener("click", () => {
    titulo.innerHTML = parseInt(titulo.innerHTML) + 1
})
let subtrai = document.getElementById("subtrai").addEventListener("click", () => {
    titulo.innerHTML = parseInt(titulo.innerHTML) - 1
})
let zera = document.getElementById("zera").addEventListener("click", () => {
    titulo.innerHTML = titulo.innerHTML = 0

})