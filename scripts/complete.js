// Adiciona evento de clique nas opções de tema
// Para cada elemento com a classe 'option', adiciona um ouvinte de evento que chama a função 'tema' ao ser clicado.
document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('click', tema);
});

// Botão de próxima questão
// Adiciona um evento de clique ao botão '.proximaQst', que também chama a função 'tema'.
// a funcao tema chama a funcao refresh que adiciona +1 ao indice da reposta da vez, fazendo com que a tela passe pra proxima questao
document.querySelector('.proximaQst').addEventListener('click', tema);

// Elementos do DOM
// Seleciona e armazena referências para os elementos HTML usados no quiz.
let dbarProgress = document.querySelector('.barrProgress'); // Barra de progresso
let menu = document.querySelector('.cabecalho'); // menu mob
let dTema = document.querySelector('.tema-father'); // Contêiner do tema inicial
let dQuest = document.querySelector('.questionArea'); // Área das questões
let dResult = document.querySelector('.fatherResult'); // Contêiner do resultado final
let dResp = document.querySelectorAll('.rOption'); // Opções de resposta


// Variáveis de controle
let ArrQuest = 0; // Array contendo as questões do tema selecionado
let indexQues = 0; // Índice da questão atual
let pt = 0; // Pontuação acumulada com as respostas corretas





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
    }

    // Verifica qual tema foi selecionado e define o array de questões correspondente
    if (dataOpTema === "pronouns") {
        ArrQuest = questPronomes;
    } else if (dataOpTema === "toBe") {
        ArrQuest = questToBe;
    } else if (dataOpTema === "SimplePhrases") {
        ArrQuest = questSimplePhrases;
    }

    // Atualiza a tela com as questões do tema selecionado
    refreshScreen(ArrQuest);
}






// Atualiza a tela com questões e opções
function refreshScreen(arrayQuestoes) {
    // Calcula a porcentagem de progresso baseado no índice da questão atual
    let pct = Math.floor((indexQues / arrayQuestoes.length) * 100);
    document.querySelector('.sonProgress').style.width = `${pct}%`;

    if (arrayQuestoes[indexQues]) {
        // Atualiza o texto da questão 
        document.querySelector('.question').textContent = arrayQuestoes[indexQues].question;

        // seleciona linmpa e oculta a div de traduçao
        let dTraducao = document.querySelector('.questTraucao')
        dTraducao.textContent = '';
        dTraducao.style.display = "none"

        // seleciona btn de traduçao
        let btnTraducao = document.querySelector('.traducao')
        btnTraducao.style.backgroundColor = "#94D233"

        // adiciona o evento de click que ira exibir a traduçao
        btnTraducao.addEventListener('click', () => {
            dTraducao.style.display = "block"
            dTraducao.textContent = arrayQuestoes[indexQues - 1].traduction;
            btnTraducao.style.backgroundColor = "#3E5159"
        })

        let opcMudaCorClick = false
        // Itera sobre as opções de resposta para preenchê-las e adicionar funcionalidade de clique
        dResp.forEach((resp, x) => {
            resp.textContent = arrayQuestoes[indexQues].options[x]; // Define o texto da opção
            
            resp.onclick = (event) => {
                // verifica se ja ouve click pra mudar a cor so do primeiro botao
                if (!opcMudaCorClick) {
                    opcMudaCorClick = true
                    // troca a cor da opçao clicada
                    event.target.style.borderColor = '#48a3c7';
                    // Define a cor do texto
                    event.target.style.color = '#48a3c7'
                };

                // Verifica a resposta e altera a cor do botão de próxima questão
                acerto(event, arrayQuestoes);
                document.querySelector('.proximaQst').style.backgroundColor = "#94D233";
            };
        });
    } else {
        // Se não houver mais questões, exibe o resultado final
        dQuest.style.display = "none";
        dResult.style.display = "flex";
        
        dbarProgress.style.display = "none";
        menu.style.display = "flex";

        finishQuiz(pt);
    }

    // Incrementa o índice da questão para exibir a próxima questão na próxima iteração
    indexQues++;
}







// Verifica acertos e atualiza a questão
function acerto(e, answer) {

    // Obtém o índice da resposta clicada (atributo 'data-op') e a resposta correta
    let respData = parseInt(e.target.getAttribute('data-op'));
    let answerVez = answer[indexQues - 1].answer; // Usa 'indexQues - 1' devido ao incremento prévio

    let textResp = e.target.textContent; // Texto da resposta selecionada
    let questel = document.querySelector('.question'); // Elemento contendo a questão
    let questText = questel.textContent; // Texto da questão

    // Verifica se a questão possui um espaço para preenchimento ('___')
    if (questText.includes('___')) {
        if (respData === answerVez) {
            // Substitui o espaço na questão pelo texto da resposta correta (cor verde)
            let newtext = questText.replace('___', `<span class="spanCerto">${textResp}</span>`);
            questel.innerHTML = newtext;
            pt++; // Incrementa a pontuação
        } else {
            // Substitui o espaço na questão pelo texto da resposta incorreta (cor vermelha)
            let newtext = questText.replace('___', `<span class="spanErado">${textResp}</span>`);
            questel.innerHTML = newtext;
        }
    }


    // Restaura a cor do botão de próxima questão
    let btnProximo = document.querySelector('.proximaQst');
    btnProximo.onclick = () => {
        btnProximo.style.backgroundColor = "#3E5159";

        // restaura a cor das opc
        dResp.forEach((resp) => {
            // troca a cor da opçao clicada
            resp.style.borderColor = '#3E5159';
            // Define a cor do texto
            resp.style.color = '#f3f9fc';
            opcMudaCorClick = false

        });
    }
}






// Exibe os resultados
function finishQuiz(pt) {
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
    let modalidade = "Complete as Palavras"

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
    salvarPartida(modalidade, dateForamatada, acerto, quest, acertos)
}




// Reseta o quiz
// Restaura o estado inicial para permitir que o usuário refaça o quiz
document.querySelector('.btnNovamente').addEventListener('click', reset);

// restart pelo botao do home
document.querySelector('.home').addEventListener('click', reset);



function reset() {
    dResult.style.display = "none";
    menu.style.display = "flex";
    dTema.style.display = "flex";
    dbarProgress.style.display = "none";

    indexQues = 0; // Reseta o índice das questões
    pt = 0; // Reseta a pontuação
    ArrQuest = 0; // Limpa o array de questões
    document.querySelector('.sonProgress').style.width = "0%"; // Reseta a barra de progresso
}



// funcao que constroi o objeto que ira ser armazenado no localStorage
function salvarPartida(modalidade, date, pct, quest, acerto) {
    let partida = {
        modalidade: modalidade,
        data: date,
        pct: pct,
        quest: quest,
        acerto: acerto,
        id: 1
    }

    // resgata o array de partidas que ta no LS e converte pra objeto normal, ou crio um array vazio caso nao exista 
    let partidasSalvas = JSON.parse(localStorage.getItem("partidas")) || []

    // nao entende poha nenhuma, mas parece que ele vai pegar o maior id do array
    let maiorId = partidasSalvas.reduce((max, partida) => Math.max(max, partida.id), 0)

    // pega o id da partida que ira ser salva e adiciona o valor do maior id ja existente mais 1
    partida.id = maiorId + 1

    // adiciona a nova partida ao array de partidas
    partidasSalvas.push(partida)

    // adiciona salva o array atualizado no local storage
    localStorage.setItem("partidas", JSON.stringify(partidasSalvas))

}

