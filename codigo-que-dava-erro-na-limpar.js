// adicionadndo evento de click nas div de options e chamando a funçao que decide o tema a ser trabalhado:
document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('click', tema)
})

// botao de proxima questao
document.querySelector('.butonVerificar').addEventListener('click', tema)

// elementos do DOM usados 
let dbarProgress = document.querySelector('.barrProgress') // div da barra de progresso
let dTema = document.querySelector('.tema-father ') // div do escolha o onome
let dQuest = document.querySelector('.questionArea') // div que armazena as questoes
let dResult = document.querySelector('.fatherResult') // div que exibe o resultado final
let dTraducao = document.querySelector('.questTraucao') // div que contem a traduçao
let dResp = document.querySelectorAll('.rOption') // divs que  contem as respostas



// variaveis de controle
let ArrQuest = 0 // armazena o array que estamos trablahando
let indexQues = 0 // possiçao do array
let pt = 0 // pontos de acertos



// function de decide o tema a ser trabalhado
function tema(e) {
    let dataOpTema = e.target.getAttribute('data-op')

    // if else pra exibir a div ArrQuest 
    if (dataOpTema) {
        dTema.style.display = "none"
        dQuest.style.display = "flex"
        dbarProgress.style.display = "flex"
    }


    // condicional pra descobrir o tema 
    if (dataOpTema === "pronouns") {
        ArrQuest = questPronomes
    } else if (dataOpTema === "toBe") {
        ArrQuest = questToBe
    } else if (dataOpTema === "SimplePhrases") {
        ArrQuest = questSimplePhrases
    }

    // chama a funçao atualizar tela e passa o array de ArrQuest que deve ser trablahdo
    refreshScreen(ArrQuest)
}



// function que atualizar a tela:
function refreshScreen(arrayQuestoes) {

    // atualiza a barra de progresso  
    let pct = Math.floor((indexQues / arrayQuestoes.length) * 100) // obtem o valor em porcentagem das questoes e converte ele pra um numero inteiro arredondado
    document.querySelector('.sonProgress').style.width = `${pct}%`


    // verifica se ainda temos questoes
    if (arrayQuestoes[indexQues]) {
        document.querySelector('.questTraucao').textContent = arrayQuestoes[indexQues].traduction // prenche o a traduçao com a atraduca atualizada
        document.querySelector('.question').textContent = arrayQuestoes[indexQues].question // preenche a questao com a questao atualizada

        // loop pra prencher as div de respostas e adicionar evento que pega a respota e joga na questao
        for (let x = 0; x < dResp.length; x++) {
            dResp[x].textContent = arrayQuestoes[indexQues].options[x] // preneche as 4 divs com suas 4 repostas

            dResp[x].addEventListener('click', (event) => {
                acerto(event, arrayQuestoes)

                // deixa o botao de confirmar verde
                document.querySelector('.butonVerificar').style.backgroundColor = "#94D233"
            })
        }
    } else {
        dQuest.style.display = "none";
        dResult.style.display = "flex";
        finishQuiz(pt)
    }

    indexQues++
}




// ja recebe o asnswer quando e chamda em refresh
function acerto(e, answer) {
    let respData = parseInt(e.target.getAttribute('data-op')) // pega o data-op da questao clicada
    let answerVez = answer[indexQues - 1].answer // pega  a variavel que aramzena o indece da resposta correta -1 pq como o index e incrementado na funcao refresh ele ven con 1 a mais pra ca

    // Substitui o marcador ___ pela resposta selecionada com estilo
    let textResp = e.target.textContent // pega o texto do elemento clicado
    let questel = document.querySelector('.question') // pega a questao da tela
    let questText = questel.textContent // adiciona o texto da questao da tela em uma let

    // if reponsavel por dar cor a resposta adicionada. verde certa vermelha errada
    if (questText.includes('___')) { // Verifica se há ___ na questão (como ele  so substitui o underline pelo texto clicado se exixitir un underline, ele nao substitui denovo apos o underline nao estiver la, permitindo substituir o texto apenas uma vez)
        if (respData === answerVez) {
            let newtext = questText.replace('___', `<span class="spanCerto">${textResp}</span>`);
            questel.innerHTML = newtext;
            pt++
        } else {
            let newtext = questText.replace('___', `<span class="spanErado">${textResp}</span>`);
            questel.innerHTML = newtext;
        }
    }

    // deixa o botao de confirmar com sua cor normal dps que pula pra proxima questao
    let btnProximo = document.querySelector('.butonVerificar');
    btnProximo.removeEventListener('click', resetButtonColor); // remove evento la em cima no for das opçoes (apos clicar em uma opçao ele fica vermelho )
    btnProximo.addEventListener('click', resetButtonColor); // adiciona evento de clique nele msm que chama a funcao que deixa ele na cor normal novamente(ao clicar nele pra proxima questao)

    function resetButtonColor() {
        btnProximo.style.backgroundColor = "#3E5159";
    }
    
}


function finishQuiz(pt) {
    let parabens = document.querySelector('.scoreText1') // msg de parebens
    let pctScore = document.querySelector('.scorePct') // msg de porcentagem de acertos
    textScore = document.querySelector('.scoreText2') // questoes respondidas e acertadas 
    let burro = document.querySelector('.burro')
    let maisMenos = document.querySelector('.maisMenos')
    let genio = document.querySelector('.miseravelGenio')
  
    

    let acerto = (pt / ArrQuest.length) * 100 // porcentagem de acertos
    pctScore.textContent = `Acertou ${acerto}%`
    textScore.textContent = `Voce Respondeu ${ArrQuest.length} questoes e acertou ${pt}`

    if(acerto <= 49) {
        burro.play()
        parabens.textContent = "precisa estudar mais"
        pctScore.style.color = "#e44545"
    } else if(acerto > 50 && acerto < 80) {
        maisMenos.play()
        parabens.textContent = "parabens"
        pctScore.style.color = "#94D233"
    } else if(acerto >= 80) {
        genio.play()
        parabens.textContent = "Excelete"
        pctScore.style.color = "#ffe714"
    }

}


document.querySelector('.btnNovamente').addEventListener('click', reset)
function reset() {
  
}