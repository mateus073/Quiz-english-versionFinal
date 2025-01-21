// Variáveis usadas
const dbarProgress = document.querySelector('.barrProgress'); // Barra de progresso
const menu = document.querySelector('.cabecalho'); // menu mob
let dQuest = document.querySelector('.questionArea'); // Área das questões
let dResult = document.querySelector('.fatherResult'); // Contêiner do resultado final
const dTema = document.querySelector('.tema-father'); // Tema

let arrayQuest = null;  // A variável global que armazenará o array de questões
let indexQues = 0
let pt = 0
let cliqueiProximo = false
const btnProximoQuest = document.querySelector('.proximaQst');

// COMEÇO DAS FUNÇÕES RESPONSÁVEIS POR ATUALIZAR A TELA

// vai chamar a funcao que ira pegar o dataname e usalo pra decidir o tema a ser usado (qual array do objtos)
document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('click', tema);
});


// Define o tema a ser trabalhado (qual array de objetos)
// recebe o event e pega o data-name
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

    // passa o array de objetos a ser trabalhado
    questaoVez(arrayQuest);
    console.log(arrayQuest);
}


// recebe o array de objetos a ser trabalhado 
// acessa a questao da vez e retorna ela pra fucao que ira manipulalos 
// por fim incrementa ao index, pra quando for chamada novamente atualizar a tela
function questaoVez(arrayQuest) {
    if (indexQues < arrayQuest.length) { 
        indexQues++
        let questVez = arrayQuest[indexQues - 1]; // Seleciona a questão atual    obterDadosQuestao()
        obterDadosQuestao(questVez)
        // console.log('incrementa indesQuest em questao da vez')
    } else {
        console.log("fim do jogo, Nao ha mais questoes")
        // chama a funcao que vai fechar a div do jogo e vai exibir a div de resultados
        // resultadoFinal()
    }
   
}


/** Função principal para obter os dados
 *  obtem os dados da  questão atual e passa para a função que atualiza a tela
 * @param {object} questVez - questao da vez que sera utilizada.
 */
function obterDadosQuestao(questVez) {
    // Extração de dados da questão
    let txtTraduzirVez = questVez.frase;
    let palavrasEDataname = questVez.traduzida;
    let txtTraducao = questVez.traducao;

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

// adiciona evento de clique pra chamar a funcao que passa pra proxima questao
btnProximoQuest.addEventListener('click', proximaQuest)

// Função para passar para a próxima questão
function proximaQuest() {
    // Verifica se ainda há mais questões no array
    if (indexQues < arrayQuest.length) {
        cliqueiProximo = true
        let questVez = arrayQuest[indexQues]; // Seleciona a próxima questão
       
        sequeciaCorreta()

        // da um tempo pra mostrar o verde do acerto antes de passar pra proxima questao 
        setTimeout(() => obterDadosQuestao(questVez), 1000);// Atualiza os dados da questão

        console.log('Incrementa o índice em proxima questao')

        btnProximoQuest.removeEventListener('click', proximaQuest); // Remove o evento de clique
        btnProximoQuest.style.backgroundColor = "#35454d"; // Botão volta para cinza
    } else {
        console.log('Fim do jogo! Parabéns!');
        document.querySelector('.sonProgress').style.width = "100%" // enche a barra de progresso quando acabar as questoes 
        // chama a funcao que vai fechar a div do jogo e vai exibir a div de resultados
        // resultadoFinal()
    } 
    indexQues++; // Incrementa o índice para a próxima questão
}




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

    // volta ao falso, pra so fica true se aperta no botao de proximo
    cliqueiProximo = false

    // Limpa os elementos da tela antes de preencher novamente
    elPraTraduzir.innerText = ''
    elDivAreaPai.innerHTML = ''

    // Loop para limpar apenas as divs com a classe 'item'
    let divsItens = paiItens.querySelectorAll('.item'); // Seleciona as divs 'item'
    divsItens.forEach(div => div.remove()); // Remove cada div individualmente


    // Atualiza o texto da frase a ser traduzida
    elPraTraduzir.textContent = txtTraduzirVez

    // atualiza barra de progresso
    let pct = ((indexQues -1) / arrayQuest.length) * 100
    document.querySelector('.sonProgress').style.width = `${pct}%`
    console.log(indexQues)

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

        // adicionando eventos que chama a funcao que permite arrastalos
        newdivItem.addEventListener('dragstart', dragStart) //roda quando eu arrastar
        newdivItem.addEventListener('dragend', dragEnd) //roda quando eu soltar 
        paiItens.appendChild(newdivItem) // Adiciona o item ao contêiner de itens
    }

    // Criação das divs para as áreas de resposta
    for (let x = 0; x < itensCorretosOrdenados.length; x++) {
        let dataname = itensCorretosOrdenados[x].dataName; // Atributo data-name da área

        let newdiv = document.createElement('div') // Cria uma nova div para a área
        newdiv.classList.add('area') // Adiciona a classe 'area'
        newdiv.setAttribute('data-name', dataname)  // Define o atributo data-name da área
        newdiv.addEventListener('dragover', dragOver) // roda quando passa algo por cima dele 
        newdiv.addEventListener('dragleave', dragLeave) // roda quando to na area que posso soltar e saio dela 
        newdiv.addEventListener('drop', drop) // roda quando soltar o item na area

        elDivAreaPai.appendChild(newdiv) // Adiciona a área ao contêiner de áreas
    }
}
/* FIM DAS FUNCOES RESPONSAVEL POR ATUALIZAR A TELA */





/* COMEÇO DAS FUNCOES RESPONSAVEIS PELA LOGICA DO JOGO */

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
        btnProximoQuest.removeEventListener('click', proximaQuest); // Remove qualquer evento de clique previamente registrado para evitar múltiplos disparos
        btnProximoQuest.addEventListener('click', proximaQuest); // Adiciona o evento de clique ao botão
        console.log('todas as áreas foram preenchidas com itens');

        // Verifica se os itens nas áreas têm os dataNames corretos
        areas.forEach(area => {
            const areaName = area.getAttribute('data-name'); // Data-name da área
            const item = area.querySelector('.item'); // Pega os itens dentro da área
           
            // Verifica se os dataName de áreas e itens estão errados ou certos, ai se muda sua cor pra verde ou vermelho se clicar no botao de proximo
            // obs: esse efeitos de cor e removido ao passar pro proximo pq tds as divs sao recriadas 
            if (item) {
                const itemName = item.getAttribute('data-name');
                
                if (itemName !== areaName) {
                    areaCorretaPreenchida = false;
                    if (cliqueiProximo) {
                        item.style.backgroundColor = "#e44545"
                    }
                    console.log('o item dessa posição está errado');
                } 
                else {
                    if (cliqueiProximo) {
                        item.style.backgroundColor = "#85c421"
                    }
                    console.log('o item dessa posição está correto');
                }
            }
        });
    } else { // Caso as áreas não estejam preenchidas
        btnProximoQuest.style.backgroundColor = "#35454d"; // Botão volta para cinza
        areaCorretaPreenchida = false;
        btnProximoQuest.removeEventListener('click', proximaQuest); // Remove o evento de clique
    }

    // Só cai nesse if se todas as áreas estiverem preenchidas
    // e se os dataNames dos itens e das áreas estiverem corretos  
    if (areaCorretaPreenchida) {
        console.log('todas as áreas foram preenchidas, e seus dataNames estão corretos');
    }
}


/*
// Exibe os resultados
function resultadoFinal(pt) {
    // Elementos de texto para exibição do resultado
    let parabens = document.querySelector('.scoreText1');
    let pctScore = document.querySelector('.scorePct');
    let textScore = document.querySelector('.scoreText2');

    // Elementos de áudio para feedback do resultado
    let burro = document.querySelector('.burro');
    let maisMenos = document.querySelector('.maisMenos');
    let genio = document.querySelector('.miseravelGenio');

    // Calcula a porcentagem de acertos
    let acerto = (pt / ArrQuest.length) * 100;
    acerto = acerto.toFixed(0)
    pctScore.textContent = `Acertou ${acerto}%`;
    textScore.textContent = `Você respondeu ${ArrQuest.length} questões e acertou ${pt}`;

    // Define mensagens e áudios com base na porcentagem de acertos
    if (acerto <= 49) {
        burro.play();
        parabens.textContent = "Precisa estudar mais";
        pctScore.style.color = "#e44545";
    } else if (acerto >= 50 && acerto < 80) {
        maisMenos.play();
        parabens.textContent = "Parabéns";
        pctScore.style.color = "#94D233";
    } else if (acerto >= 80) {
        genio.play();
        parabens.textContent = "Excelente";
        pctScore.style.color = "#ffe714";
    }


    // pegando os dados e passando pra funcao que constroi o objeto que vai pro local storage
    let data = new Date()
    let mes = data.getMonth() + 1
    let dia = data.getDate()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    let dateForamatada = `${dia}/${mes} as ${hora}:${minutos}`

    // pegando quantidade de questoes e acertos:
    let quest = ArrQuest.length
    let acertos = pt

    // chamando a funcao que ira criar um objeto com os dados da partida
    salvarPartida(dateForamatada, acerto, quest, acertos)
}

// FIM DAS FUNCOES RELACIONDAS A LOGICA DO JOGO
*/




/* EVENTOS DO EFEITO DE ARRASTA E SOLTA */
/* 1 eventos dos itens que irei arrastar e soltar 
 - foram adicinados na funcao que cria elas 

 2 eventos da area onde irei soltar os items
 - foram adicinados na funcao que cria elas 
*/

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
    // console.log('attatou o item')
}

// 1 funcao que roda quando eu soltar meu item
function dragEnd(e) {
    e.currentTarget.classList.remove('arastouItem')
    // console.log('soltou o item')
}



/* 2 FUNCOES RELACIONADAS A AREA  */
//2 evento que roda quando passar algo por cima dele no caso o item 
function dragOver(e) {
    // so libera pra drop, ativa efeito de mudar de cor se nao ter nemhum item na area que quero soltar
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault() // libera pra drop
        e.currentTarget.classList.add('hover') // muda a cor da area quando eu passar por cima dela 
        // console.log('passou por cima da area')
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
    // console.log('solto o item na area')

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
    // console.log('passou por cima da area inical ')
}

function dragLeaveAreaIncial(e) {
    e.currentTarget.classList.remove('hover')
    // console.log('tirou de cima da area inicail ')
}

function dropAreaIncial(e) {
    e.currentTarget.classList.remove('hover')
    let itemSenodoMovido = document.querySelector('.item.arastouItem')

    e.currentTarget.appendChild(itemSenodoMovido)
    sequeciaCorreta()// serve pra tirar o verde do botao se tirar o item da area
    // console.log('soltou em cima da area inical')
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