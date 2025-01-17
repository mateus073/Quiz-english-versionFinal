// variaveis usadas
let arrayQuest = frasesEpalavras
let indexQuest = 1
const btnProximoQuest = document.querySelector('.proximaQst');
// console.log(frasesEpalavras)

// COMECO DAS FUNCOES RESPONSAVEL POR ATUALIZAR A TELA



// funcoes que passa os dados que ira  preencher a tela
function obterDadosQuestao(indexQues) {
    let questVez = arrayQuest[indexQues] // pega a questao da vez

    let txtTraduzirVez = questVez.frase         // seleciona o text da vez 
    let palavrasEDataname = questVez.traduzida  // palavras e seus dataneme
    let txtTraducao = questVez.traducao         //  pega o texto traduzido da questao da vez

    // pego so os itens corretos, sera usado pra saber quntas divs areas devo criar e seu dataname
    let itensCorretos = palavrasEDataname.filter(item => item.dataName !== "plvDistratora")

    // ordenando em ordem alfabetica pra poder prencher o dataname na sequecia correta
    let itensCorretosOrdenados = itensCorretos.sort((a, b) => {
        if (a.dataName < b.dataName) return -1;
        if (b.dataName < a.dataName) return 1;
        return 0
    })

    atualizaTela(txtTraduzirVez, palavrasEDataname, txtTraducao, itensCorretosOrdenados)
}
obterDadosQuestao(indexQuest)// roda ela a primeira vez pra preencher a tela



/** funcao que recbe os dados de prencher a tela e atualiza a tela 
 * 
* prenche o paragrafo da frase a traduzir 
*prenche as divs itens com o texto e dataname das palavras da vez 
*cria as divs area que e onde irei arrastar os itens e soltar 
*dados recebidos:
* 
 */
function atualizaTela(txtTraduzirVez, palavrasEDataname, txtTraducao, itensCorretosOrdenados) {
    let elPraTraduzir = document.querySelector('.textPraTraduzir')
    // let eldivsItens = document.querySelectorAll('.item')
    let paiItens = document.querySelector('.itens')
    let elDivAreaPai = document.querySelector('.paiAreasTraducao')

    // // limpa elementos antes de preenchelos novamente
    elPraTraduzir.innerText = ''
    elDivAreaPai.innerHTML = ''

    // Loop para limpar apenas as divs com a classe 'item'
    let divsItens = paiItens.querySelectorAll('.item'); // Seleciona as divs 'item'
    divsItens.forEach(div => div.remove()); // Remove cada div individualmente

    elPraTraduzir.textContent = txtTraduzirVez

    // for pra as divs dos itens que serao arastados
    for (let x = 0; x < palavrasEDataname.length; x++) {
        let newdivItem = document.createElement('div')

        let txtItemVez = palavrasEDataname[x].palavra
        let dataName = palavrasEDataname[x].dataName

        newdivItem.classList.add('item')
        newdivItem.setAttribute('data-name', dataName)
        newdivItem.setAttribute('draggable', 'true')
        newdivItem.innerText = txtItemVez

        paiItens.appendChild(newdivItem)
    }

    // for pra criar e colocar dataname nas divs areas que ficara os itens arrastados 
    for (let x = 0; x < itensCorretosOrdenados.length; x++) {
        let dataname = itensCorretosOrdenados[x].dataName

        let newdiv = document.createElement('div')
        newdiv.classList.add('area')
        newdiv.setAttribute('data-name', dataname)

        elDivAreaPai.appendChild(newdiv)
    }
}

/* FIM DAS FUNCOES RESPONSAVEL POR ATUALIZAR A TELA */



/* COMEÇO DAS FUNCOES RESPONSAVEIS PELA LOGICA DO JOGO */

/** funcao responsavel pela logica do jogo
 * usa if pra saber se:
 *  -todas as divs area foram preenchida com os itens 
 *  -se o dataname da are e do item estao corretos
 * se estiver tudo certo ele chama a funcao que vai atualizar a tela pra proxima rodada
*/
function sequeciaCorreta() {
    let areas = document.querySelectorAll('.area')
    let itens = document.querySelectorAll('.area .item')

    let areaCorretaPreenchida = true //variavel de controle pra saber se as areas estao corretas e preenchidas 

    //if pra saber se as arreas estao prenchidas
    if (areas.length === itens.length) {
        // atualiza cor do botao pra verde
        btnProximoQuest.style.backgroundColor = "#85c421"
        btnProximoQuest.addEventListener('click', () => {
            proximaQuest();
        });

        areas.forEach(area => {
            const areaName = area.getAttribute('data-name')
            const item = area.querySelector('.item')
            console.log('todas as areas foram preenchidas com itens')

            // if pra saber se os dataName de areas e item esta errado
            if (item) {
                const itemName = item.getAttribute('data-name')

                if (itemName !== areaName) {
                    areaCorretaPreenchida = false
                    console.log('sequencia esta errada')
                }
            }
        })
    } else { // else pra saber se nao foram preenchidas todas as areas 
        btnProximoQuest.style.backgroundColor = "#35454d"  // atualiza cor do botao pra cinza novamente
        areaCorretaPreenchida = false

    }

    /** resultado final
     * so cai nesse se todas as areas estiverem preenchidas
     * se o dataname dos itens e das areas estiverem corrtos
     */
    if (areaCorretaPreenchida) {
        console.log('todas as areas foram pereenchidas, e seus datanames estao corretos')
    }
}



// // funcao responsavel por passar pra proxaima questao
// function proximaQuest() {
//     document.querySelector('.proximaQst').addEventListener('click', () => {
//         indexQuest++
//         obterDadosQuestao(indexQuest)
//     })

// console.log('passo pra proxima questao')
// }

// Função responsável por passar para a próxima questão
function proximaQuest() {
    // Incrementa o índice da questão
    indexQuest++;
    btnProximoQuest.style.backgroundColor = "#35454d" // deixa o botao de proximo cinza apos passar pra proxima qeustao
    

    // Verifica se ainda há mais questões no array
    if (indexQuest < arrayQuest.length) {
        // Obtém os dados da próxima questão
        obterDadosQuestao(indexQuest);
        console.log('Passou para a próxima questão:', indexQuest);
    } else {
        // Se não houver mais questões, pode exibir uma mensagem ou reiniciar
        console.log('Fim do jogo! Parabéns!');
    }
    // 1 eventos dos itens que irei arrastar e soltar
    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('dragstart', dragStart) //roda quando eu arrastar
        item.addEventListener('dragend', dragEnd) //roda quando eu soltar 
    })

    // 2 eventos da area onde irei soltar os items
    document.querySelectorAll('.area').forEach(area => {
        area.addEventListener('dragover', dragOver) // roda quando passa algo por cima dele 
        area.addEventListener('dragleave', dragLeave) // roda quando to na area que posso soltar e saio dela 
        area.addEventListener('drop', drop) // roda quando soltar o item na area
    })

}

// FIM DAS FUNCOES RELACIONDAS A LOGICA DO JOGO





/* EVENTOS DO EFEITO DE ARRASTA E SOLTA */

// 1 eventos dos itens que irei arrastar e soltar
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart) //roda quando eu arrastar
    item.addEventListener('dragend', dragEnd) //roda quando eu soltar 
})

// 2 eventos da area onde irei soltar os items
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver) // roda quando passa algo por cima dele 
    area.addEventListener('dragleave', dragLeave) // roda quando to na area que posso soltar e saio dela 
    area.addEventListener('drop', drop) // roda quando soltar o item na area
})

// 3 eventos da div inical onde estava meus itens, inclui a logica de poder dropar de volta os itens na div pai
document.querySelector('.itens').addEventListener('dragover', dragOverAreaIncial)  // roda quando passa algo por cima dele 
document.querySelector('.itens').addEventListener('dragleave', dragLeaveAreaIncial)  // roda quando to na area que posso soltar e saio dela 
document.querySelector('.itens').addEventListener('drop', dropAreaIncial)  // roda quando soltar o item na area

/* FIM DOS EVENTOS DO EFEITO DE ARRASTA E SOLTA */






/* FUNCOES DO EFEITO DE ARRASTA E SOLTA */

/* 1 FUNCOES RELACIONADAS AO ITEM */
// 1 funcao que roda quando eu arrastar meu item
function dragStart(e) {
    e.currentTarget.classList.add('arastouItem')
}

// 1 funcao que roda quando eu soltar meu item
function dragEnd(e) {
    e.currentTarget.classList.remove('arastouItem')
}



/* 2 FUNCOES RELACIONADAS A AREA  */

//2 evento que roda quando passar algo por cima dele no caso o item 
function dragOver(e) {
    // so libera pra drop, ativa efeito de mudar de cor se nao ter nemhum item na area que quero soltar
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault() // libera pra drop
        e.currentTarget.classList.add('hover') // muda a cor da area quando eu passar por cima dela 
    }
}

//2 evento que roda quando to em uma area que posso soltar e saio dela 
function dragLeave(e) {
    e.currentTarget.classList.remove('hover') // retira o efeito de cor da area quando o item sair de cima dela 
    // console.log('saio da area dropavel')
}

/*2 evento quando eu soltar algo
*  
*  porem ele so roda se eu liberar no dragover o drop
*  
*  obs: como selecionar o item que estou arrastando?
*  lembra que quando eu arrasto um item  na funcao de item que ta la emcima eu dor uma class que vai mudar a cor dele?
*  vou usar essa class pra pegalo ate pq ela e retirada dele quando eu o soltar 
*/
function drop(e) {
    e.currentTarget.classList.remove('hover') // retira o efeito de cor da area quando soltar o item nela

    // pego o item que ta sendo movido OBS: essa calss arrastou item so existe quando ele ta sendo arrastado
    let itemSendoMovido = document.querySelector('.item.arastouItem')

    // verificaçao pra saber se ja existe algum item dentro da area que to querendo soltar o item
    if (e.currentTarget.querySelector('.item') === null) {
        e.currentTarget.appendChild(itemSendoMovido)

        sequeciaCorreta()
    }
}




//3 FUNCOES DA AREA INICAL DOS ITENS 
// inclui a logica de poder dropar de volta os itens na div pai 
// obs: nao irei comentar pq ela e igual as funcoes acima que ja comentei 
function dragOverAreaIncial(e) {
    e.preventDefault()
    e.currentTarget.classList.add('hover')
    // console.log('passou por cima ')
}

function dragLeaveAreaIncial(e) {
    e.currentTarget.classList.remove('hover')
    // console.log('passou tirou de cima ')
}

function dropAreaIncial(e) {
    e.currentTarget.classList.remove('hover')
    let itemSenodoMovido = document.querySelector('.item.arastouItem')

    e.currentTarget.appendChild(itemSenodoMovido)
    sequeciaCorreta()
    // console.log('soltou em cima  ')
}

/* FIM DAS FUNCOES DO EFEITO DE ARRASTA E SOLTA */





/* passo a passo 
*  
*  primeiro preciso entender a difenrenca do .target pro e.currenttarget

*  passo a passo
*  1 colocar o draggable = true no elemento html pra poder arrastalo

*  2 tratar dos itens que irei arrasta, definir acontecimentos de:
*   - arrasta, que no caso e dar um opacity menor nele 
*   - soltar, que no caso e tirar a opacity menor dele 

*  3 tratar de das areas de drop, que e onde eu posso colocalos 
    - pra criar uma area onde posso dropar preciso de colocar pelo menos 3 eventos que sao elels:
        - dragover = evento que roda quando passar algo por cima dele no caso o item 
        - dragleave = evento que roda quando to em uma area que posso soltar e saio dela 
        - drop = evento que roda quando eu soltar o item encima dele, 
            OBS: porem ele so roda se eu liberar no dragover o drop com um:  e.preventDefault()
            obs: como selecionar o item que estou arrastando pra jogar dentro dele?
            lembra que quando eu arrasto um item  na funcao de item que ta la emcima eu dou uma class que vai mudar a cor do item arrastado?
            vou usar essa class pra pegalo ate pq ela e retirada dele quando eu o soltar

    4 pra agora devo colocar as 3 funcoes na area inical dos itens pra poder colocalos la de volta 
*/