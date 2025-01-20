// Variáveis usadas
let arrayQuest = null;  // A variável global que armazenará o array de questões
let indexQuest = 0;
const btnProximoQuest = document.querySelector('.proximaQst');

const dbarProgress = document.querySelector('.barrProgress'); // Barra de progresso
const menu = document.querySelector('.cabecalho'); // menu mob
let dQuest = document.querySelector('.questionArea'); // Área das questões
let dResult = document.querySelector('.fatherResult'); // Contêiner do resultado final
const dTema = document.querySelector('.tema-father'); // Tema


// COMEÇO DAS FUNÇÕES RESPONSÁVEIS POR ATUALIZAR A TELA
// Adiciona evento de clique nas opções de tema
// Para cada elemento com a classe 'option', adiciona um ouvinte de evento que chama a função 'tema' ao ser clicado.
document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('click', tema);
});

// Define o tema a ser trabalhado
function tema(e) {
    // Obtém o atributo 'data-op' do elemento clicado para identificar o tema selecionado
    let dataOpTema = e.target.getAttribute('data-op');

    if (dataOpTema) {
        // Oculta o contêiner de seleção de temas e exibe as áreas de perguntas e barra de progresso
        dTema.style.display = "none";
        menu.style.display = "none";
        dQuest.style.display = "flex";
        dbarProgress.style.display = "flex";
        console.log(dataOpTema);
    }

    // Verifica qual tema foi selecionado e define o array de questões correspondente
    if (dataOpTema === "traduzaFrasesAleatorias") {
        arrayQuest = traduzaFrasesAleatorias;
    } else if (dataOpTema === "traduzaPNdemonstrativos") {
        arrayQuest = traduzaPNdemonstrativos;
    } else if (dataOpTema === "traduzaPNinterrogativos") {
        arrayQuest = traduzaPNinterrogativos;
    } else if (dataOpTema === "traduzaToBe") {
        arrayQuest = traduzaToBe;
    }

    // Atualiza a tela com as questões do tema selecionado
    obterDadosQuestao(arrayQuest);
    console.log(arrayQuest);
}

/** Função principal para obter os dados da questão atual e passar para a função que atualiza a tela
 * Obtém os dados da questão atual com base no índice fornecido e os utiliza para atualizar a interface do jogo.
 * 
 * @param {Array} newarrayQuest - Array de questões a ser utilizado.
 */
function obterDadosQuestao(newarrayQuest) {
    let questVez = newarrayQuest[indexQuest]; // Seleciona a questão atual

    // Extração de dados da questão
    let txtTraduzirVez = questVez.frase;         // seleciona o texto da vez 
    let palavrasEDataname = questVez.traduzida;  // palavras e seus data-name
    let txtTraducao = questVez.traducao;         // pega o texto traduzido da questão da vez

    // Filtra apenas os itens corretos (excluindo palavras distratoras)
    let itensCorretos = palavrasEDataname.filter(item => item.dataName !== "plvDistratora");

    // Ordenando em ordem alfabética para poder preencher o data-name na sequência correta
    let itensCorretosOrdenados = itensCorretos.sort((a, b) => {
        if (a.dataName < b.dataName) return -1;
        if (b.dataName < a.dataName) return 1;
        return 0;
    });

    // Atualiza a tela com os dados processados
    atualizaTela(txtTraduzirVez, palavrasEDataname, txtTraducao, itensCorretosOrdenados);
}
// // Executa a função pela primeira vez para exibir a primeira questão
// obterDadosQuestao(indexQuest)// roda ela a primeira vez pra preencher a tela



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
        console.log('todas as áreas foram preenchidas com itens');

        // Verifica se os itens nas áreas têm os dataNames corretos
        areas.forEach(area => {
            const areaName = area.getAttribute('data-name'); // Data-name da área
            const item = area.querySelector('.item'); // Pega os itens dentro da área


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

    } else {
        console.log('Fim do jogo! Parabéns!');
        // chama a funcao que vai fechar a div do jogo e vai exibir a div de resultados
        resultadoFinal()
    }
}

function resultadoFinal() {

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
    // console.trace()
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