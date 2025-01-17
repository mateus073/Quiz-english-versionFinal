// variaveis usadas
let arrayQuest = frasesEpalavras
let indexQuest = 0
const btnProximoQuest = document.querySelector('.proximaQst');
// console.log(frasesEpalavras)

// COMECO DAS FUNCOES RESPONSAVEL POR ATUALIZAR A TELA




/** Função principal para obter os dados da questão atual e passa pra funcao que atualiza a tela
 * Obtém os dados da questão atual com base no índice fornecido e os utiliza para atualizar a interface do jogo.
 * 
 * @param {number} indexQues - Índice da questão no array `arrayQuest`.
 */
function obterDadosQuestao(indexQues) {
    let questVez = arrayQuest[indexQues] // Seleciona a questão atual

    // Extração de dados da questão
    let txtTraduzirVez = questVez.frase         // seleciona o text da vez 
    let palavrasEDataname = questVez.traduzida  // palavras e seus dataneme
    let txtTraducao = questVez.traducao         //  pega o texto traduzido da questao da vez

    // Filtra apenas os itens corretos (excluindo palavras distratoras)
    let itensCorretos = palavrasEDataname.filter(item => item.dataName !== "plvDistratora")

    // ordenando em ordem alfabetica pra poder prencher o dataname na sequecia correta
    let itensCorretosOrdenados = itensCorretos.sort((a, b) => {
        if (a.dataName < b.dataName) return -1;
        if (b.dataName < a.dataName) return 1;
        return 0
    })

    // Atualiza a tela com os dados processados
    atualizaTela(txtTraduzirVez, palavrasEDataname, txtTraducao, itensCorretosOrdenados)
}

// Executa a função pela primeira vez para exibir a primeira questão
obterDadosQuestao(indexQuest)// roda ela a primeira vez pra preencher a tela



/**Atualiza a interface do jogo com base nos dados fornecidos.
 * 
 * prenche o paragrafo da frase a traduzir 
 * prenche as divs itens com o texto e dataname das palavras da vez 
 * cria as divs area que e onde irei arrastar os itens e soltar
 * 
 * @param {string} txtTraduzirVez - Frase que deve ser traduzida.
 * @param {Array} palavrasEDataname - Lista de palavras para exibição como itens arrastáveis.
 * @param {string} txtTraducao - Tradução da frase completa.
 * @param {Array} itensCorretosOrdenados - Lista ordenada de itens corretos, usada para gerar as áreas de resposta.
 */
function atualizaTela(txtTraduzirVez, palavrasEDataname, txtTraducao, itensCorretosOrdenados) {
    let elPraTraduzir = document.querySelector('.textPraTraduzir') // Elemento onde será exibida a frase a ser traduzida
    let paiItens = document.querySelector('.itens') // Contêiner para os itens arrastáveis
    let elDivAreaPai = document.querySelector('.paiAreasTraducao') // Contêiner para as áreas de resposta

    // Limpa os elementos da tela antes de preencher novamente
    elPraTraduzir.innerText = ''
    elDivAreaPai.innerHTML = ''
    // Loop para limpar apenas as divs com a classe 'item'
    let divsItens = paiItens.querySelectorAll('.item'); // Seleciona as divs 'item'
    divsItens.forEach(div => div.remove()); // Remove cada div individualmente

    // Atualiza o texto da frase a ser traduzida
    elPraTraduzir.textContent = txtTraduzirVez

    // Criação das divs para os itens arrastáveis
    for (let x = 0; x < palavrasEDataname.length; x++) {
        let newdivItem = document.createElement('div') // Cria uma nova div para o item
        let txtItemVez = palavrasEDataname[x].palavra // Texto do item atual
        let dataName = palavrasEDataname[x].dataName  // Atributo data-name associado ao item

        // Configurações da nova div
        newdivItem.classList.add('item') // Adiciona a classe 'item'
        newdivItem.setAttribute('data-name', dataName)  // Define o atributo data-name
        newdivItem.setAttribute('draggable', 'true') // Torna o item arrastável
        newdivItem.innerText = txtItemVez // Define o texto exibido no item

        paiItens.appendChild(newdivItem) // Adiciona o item ao contêiner de itens
    }

    // Criação das divs para as áreas de resposta
    for (let x = 0; x < itensCorretosOrdenados.length; x++) {
        let dataname = itensCorretosOrdenados[x].dataName; // Atributo data-name da área

        let newdiv = document.createElement('div') // Cria uma nova div para a área
        newdiv.classList.add('area') // Adiciona a classe 'area'
        newdiv.setAttribute('data-name', dataname)  // Define o atributo data-name da área

        elDivAreaPai.appendChild(newdiv) // Adiciona a área ao contêiner de áreas
    }
}
/* FIM DAS FUNCOES RESPONSAVEL POR ATUALIZAR A TELA */





/* COMEÇO DAS FUNCOES RESPONSAVEIS PELA LOGICA DO JOGO */

// Define handleProximaQuest fora de sequeciaCorreta para manter a mesma referência pro botao de proximo
const handleProximaQuest = () => {
    proximaQuest();
    console.log('proxima questao foi chamada');
};


/** Função responsável por verificar a sequência correta
 * Verifica se todas as áreas de resposta estão preenchidas corretamente.
 * Atualiza o botão para avançar à próxima questão e exibe mensagens no console.
 *  * usa if pra saber se:
 *  - todas as divs área foram preenchidas com os itens 
 *  - se o data-name da área e do item estão corretos
 * se estiver tudo certo, ele chama a função que vai atualizar a tela para a próxima rodada
 */
function sequeciaCorreta() {
    let areas = document.querySelectorAll('.area'); // Seleciona todas as áreas de resposta
    let itens = document.querySelectorAll('.area .item');  // Seleciona os itens dentro das áreas

    let areaCorretaPreenchida = true; // Variável de Controle para verificar se todas as áreas estão corretas

    // Verifica se todas as áreas estão preenchidas
    if (areas.length === itens.length) {
        btnProximoQuest.style.backgroundColor = "#85c421"; // Atualiza a cor do botão para verde
        btnProximoQuest.removeEventListener('click', handleProximaQuest); // Remove qualquer evento de clique previamente registrado para evitar múltiplos disparos
        btnProximoQuest.addEventListener('click', handleProximaQuest); // Adiciona o evento de clique ao botão

        // Verifica se os itens nas áreas têm os dataNames corretos
        areas.forEach(area => {
            const areaName = area.getAttribute('data-name'); // Data-name da área
            const item = area.querySelector('.item'); // Pega os itens dentro da área
            console.log('todas as áreas foram preenchidas com itens');


            if (item) {
                const itemName = item.getAttribute('data-name');
                // Verifica se os dataName de áreas e itens estão errados ou certos 
                if (itemName !== areaName) {
                    areaCorretaPreenchida = false; // Define como falso se houver erro
                    console.log('o item dessa posição está errado');
                } else {
                    console.log('o item dessa posição está correto');
                }
            }
        });
    } else { // Caso as áreas não estejam preenchidas
        btnProximoQuest.style.backgroundColor = "#35454d"; // Botão volta para cinza
        areaCorretaPreenchida = false;
        btnProximoQuest.removeEventListener('click', handleProximaQuest); // Remove o evento de clique
    }

    /** Resultado final
     * Só cai nesse if se todas as áreas estiverem preenchidas
     * e se os dataNames dos itens e das áreas estiverem corretos
     */
    if (areaCorretaPreenchida) {
        console.log('todas as áreas foram preenchidas, e seus dataNames estão corretos');
        // aqui irei chamar a funcao que adiciona 1 a pontuçao
    }
}



/** Função para passar para a próxima questão
 * Passa para a próxima questão ou exibe mensagem de finalização se não houver mais questões.
 * Atualiza os eventos de arrastar e soltar.
 */
function proximaQuest() {

    // Verifica se ainda há mais questões no array
    if (indexQuest < arrayQuest.length) {
        indexQuest++ // Incrementa o índice da questão
        btnProximoQuest.style.backgroundColor = "#35454d" // Reseta a cor do botão pra cinza
        obterDadosQuestao(indexQuest); // passa o indice da proxima questao 
        console.log('Passou para a próxima questão:', indexQuest);
        // chamo a funcao que vai atulalizar a barra de progresso

        // Atualiza eventos de arrastar e soltar
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
    } else {
        console.log('Fim do jogo! Parabéns!');
        // chama a funcao que vai fechar a div do jogo e vai exibir a div de resultados
    }
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
    console.trace()
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
    sequeciaCorreta()// serve pra tirar o verde do botao se tirar o item da area
    // console.log('soltou em cima  ')
}

/* FIM DAS FUNCOES DO EFEITO DE ARRASTA E SOLTA */





/* passo a passo pro arrasta e soltar 
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





// IDEIAS DE REFATORAÇAO 
// ADICIONAR EVENTOS LEGADOS PRA NAO TER QUE ADICIONAR OS EVENTOS DE ARRASTA E SOLTAR TODA VEZ QUE IR PRA PROXIMA QUESTAO E CRIAR NOVAS DIVS