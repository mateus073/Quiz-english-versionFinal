let helement = document.querySelector(".h2efeito")
let p = document.querySelector(".pEfeito")
let btn = document.querySelector(".dbtntex button")
let text = "English quiz "
const interval = 300;
const img = document.querySelector(".imglgo")




function showText(helement, tex, interval, btn, p, img) {
    const Char = tex.split("").reverse() // pega o texto dividie em array e bota a ordem inversa

    const typer = setInterval(() => {
        if (!Char.length) { // se as letras acabarem ele pausa o intervalo
            p.style.display = "block"
            btn.style.display = "block"
            img.style.transform = "scale(1.2)"

            return clearInterval(typer)
        }

        const next = Char.pop() //vai pegando o ultimo elemento do array(lenbrando que ele ja ta na ordem invertida)
        helement.innerHTML += next // vai adcionando as letras na tela       
    }, interval)
}

// deixa logo do tamanaho normal
setInterval(() => {
    img.style.transform = "scale(1.0)"
}, interval * 4)


showText(helement, text, interval, btn, p, img)


