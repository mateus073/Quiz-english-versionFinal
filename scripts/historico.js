function resgate() {
    const histocoLc = localStorage.getItem("partidas")
    let podio = document.querySelector('.scoreArea') // podioco informaçoes da melhor partida
    let listaHist = document.querySelector('.olHistorico')
    let msg = document.querySelector('.msgLogar')

    if (histocoLc) {
        msg.style.display = "none"
        let newHistori = JSON.parse(histocoLc)

        // loop pra colocar historico de partidas na tela
        for (let x = 0; x < newHistori.length; x++) {
            let texto = `${newHistori[x].data}  |  Acertos: ${newHistori[x].acerto}/${newHistori[x].quest}  |  Taxa de acertos: ${newHistori[x].pct}%`
            let newLi = document.createElement("li")
            newLi.innerText = texto

            listaHist.appendChild(newLi)
        }

        // selecionando a melhor partida
        let maiorPt = newHistori.reduce((maior, partidaAtual) => {
            if (partidaAtual.pct > maior.pct) {
                maior = partidaAtual
            }
            return maior
        }, newHistori[0])

        // exibindo a melhor partida
        document.querySelector('.pontucao').innerText = `Acertou ${maiorPt.pct}%`
        document.querySelector('.data').innerText = `${maiorPt.data}`
        document.querySelector('.acertos').innerText = `Respondeu ${maiorPt.quest} questoes e acertou ${maiorPt.acerto}`


        // muda img conforme a pct de acertos:
        let img = document.querySelector('.prizeImage')

        if (maiorPt.pct < 40) {
            img.src = "../img/burroOF.png"
            console.log("acertou menos de 40%")
            document.querySelector('.pontucao').style.color = "#e44545"
        } else if (maiorPt.pct >= 40 && maiorPt.pct < 70) {
            img.src = "../img/medalhaOF-removebg-preview.png"
            console.log("acertou mais de 40%")
        } else if (maiorPt.pct >= 70) {
            img.src = "../img/trophy-6212557_640.png"
            console.log("acertou mais de 40%")
        }
    } else {
        //exibe msg de que nao tem dados salvos no lC e exibe msg de logar e jogar 
        msg.style.display = "block"
    }
}

//  localStorage.clear()

resgate()