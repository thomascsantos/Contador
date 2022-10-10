let titulo = document.getElementById("titulo")

titulo.innerHTML = localStorage.getItem("titulo") || "0"

let adiciona = document.getElementById("adiciona").addEventListener("click", () => {
    titulo.innerHTML = parseInt(titulo.innerHTML) + 1
    memory()
})
let subtrai = document.getElementById("subtrai").addEventListener("click", () => {
    titulo.innerHTML = parseInt(titulo.innerHTML) - 1
    memory()
})
let zera = document.getElementById("zera").addEventListener("click", () => {
    titulo.innerHTML = titulo.innerHTML = 0
    memory()
})
function memory() {
    localStorage.setItem("titulo", titulo.innerHTML)
}
memory()