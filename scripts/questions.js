// pronomes pessois (personal pronous)
let questPronomes = [
    {
        question: "___ am a doctor. ",
        traduction: "(__ sou um médico.)",
        options: ["I", "He", "She", "It"],
        answer: 0
    },
    {
        question: "Lucas is my best friend. ___ likes to play basketball. ",
        traduction: "(Lucas é meu melhor amigo. ___ gosta de jogar basquete.)",
        options: ["It", "They", "We", "He"],
        answer: 3
    },
    {
        question: "Sarah is a teacher. ___ teaches math at the school.",
        traduction: "(Sarah é professora. ___ ensina matemática na escola.)",
        options: ["He", "She", "They", "We"],
        answer: 1
    },
    {
        question: "This is a book. ___ is very interesting. ",
        traduction: "(Este é um livro. ___ é muito interessante.)",
        options: ["I", "You", "It", "They"],
        answer: 2
    },
    {
        question: "My brother and I love pizza. ___ eat it every Friday. ",
        traduction: "(Meu irmão e eu amamos pizza. ___ comemos toda sexta-feira.)",
        options: ["We", "They", "He", "She"],
        answer: 0
    },
    {
        question: "My grandparents live on a farm. ___ grow vegetables there. ",
        traduction: "(Meus avós moram em uma fazenda. ___ cultivam vegetais lá.)",
        options: ["He", "We", "They", "It"],
        answer: 2
    },
    {
        question: "Anna and Julia are twins. ___ look exactly the same. ",
        traduction: "(Anna e Julia são gêmeas. ___ parecem exatamente iguais.)",
        options: ["She", "They", "We", "It"],
        answer: 1
    },
    {
        question: "Peter is very funny. ___ always makes us laugh. ",
        traduction: "(Peter é muito engraçado. ___ sempre nos faz rir.)",
        options: ["I", "He", "They", "We"],
        answer: 1
    },
    {
        question: "This is my dog. ___ loves to chase balls. ",
        traduction: "(Este é meu cachorro. ___ adora correr atrás de bolas.)",
        options: ["He", "They", "You", "It"],
        answer: 3
    },
    {
        question: "Tom and Jerry are my neighbors. ___ live in the house next to mine. ",
        traduction: "(Tom e Jerry são meus vizinhos. ___ moram na casa ao lado da minha.)",
        options: ["We", "He", "They", "It"],
        answer: 2
    },
    {
        question: "___ am learning English. ",
        traduction: "(Eu estou aprendendo inglês.)",
        options: ["I", "He", "She", "It"],
        answer: 0
    },
    {
        question: "Sophia is an artist. ___ paints beautiful pictures. ",
        traduction: "(Sophia é uma artista. ___ pinta quadros lindos.)",
        options: ["She", "He", "It", "They"],
        answer: 0
    },
    {
        question: "David and I study together. ___ help each other with homework. ",
        traduction: "(David e eu estudamos juntos. ___ ajudamos um ao outro com as tarefas.)",
        options: ["They", "We", "He", "She"],
        answer: 1
    },
    {
        question: "These are my books. ___ are on the table. ",
        traduction: "(Estes são meus livros. ___ estão na mesa.)",
        options: ["We", "He", "They", "She"],
        answer: 2
    },
    {
        question: "You and Mary are great singers. ___ always perform beautifully. ",
        traduction: "(Você e Mary são ótimos cantores. ___ sempre se apresentam lindamente.)",
        options: ["You", "They", "We", "He"],
        answer: 1
    },
    {
        question: "This is a chair. ___ is broken. ",
        traduction: "(Esta é uma cadeira. ___ está quebrada.)",
        options: ["I", "He", "They", "It"],
        answer: 3
    },
    {
        question: "My teacher is very kind. ___ helps me with my doubts. ",
        traduction: "(Meu professor é muito gentil. ___ me ajuda com minhas dúvidas.)",
        options: ["They", "It", "I", "He"],
        answer: 3
    },
    {
        question: "Look at those children. ___ are playing in the park. ",
        traduction: "(Olhe para aquelas crianças. ___ estão brincando no parque.)",
        options: ["We", "He", "It", "They"],
        answer: 3
    },
    {
        question: "I have a laptop. ___ is brand new. ",
        traduction: "(Eu tenho um laptop. ___ é novinho em folha.)",
        options: ["They", "It", "He", "I"],
        answer: 1
    },
    {
        question: "Julia and you are going to the cinema. ___ love watching movies. ",
        traduction: "(Julia e você estão indo ao cinema. ___ adoram assistir filmes.)",
        options: ["They", "We", "You", "It"],
        answer: 2
    }
];



//  verbo to be
let questToBe = [
    {
        question: "I ___ a student. ",
        traduction: "(Eu sou um estudante.)",
        options: ["is", "be", "am", "are"],
        answer: 2
    },
    {
        question: "She ___ my sister. ",
        traduction: "(Ela é minha irmã.)",
        options: ["are", "is", "am", "be"],
        answer: 1
    },
    {
        question: "We ___ friends. ",
        traduction: "(Nós somos amigos.)",
        options: ["are", "am", "be", "is"],
        answer: 0
    },
    {
        question: "He ___ a doctor. ",
        traduction: "(Ele é um médico.)",
        options: ["is", "be", "are", "am"],
        answer: 0
    },
    {
        question: "They ___ happy. ",
        traduction: "(Eles estão felizes.)",
        options: ["be", "is", "are", "am"],
        answer: 2
    },
    {
        question: "You ___ my teacher. ",
        traduction: "(Você é meu professor.)",
        options: ["is", "be", "am", "are"],
        answer: 3
    },
    {
        question: "It ___ a beautiful day. ",
        traduction: "(É um dia lindo.)",
        options: ["am", "is", "are", "be"],
        answer: 1
    },
    {
        question: "He ___ not at home. ",
        traduction: "(Ele não está em casa.)",
        options: ["is", "are", "am", "be"],
        answer: 0
    },
    {
        question: "We ___ not tired. ",
        traduction: "(Nós não estamos cansados.)",
        options: ["am", "are", "be", "is"],
        answer: 1
    },
    {
        question: "I ___ very happy today. ",
        traduction: "(Eu estou muito feliz hoje.)",
        options: ["am", "be", "is", "are"],
        answer: 0
    },
    {
        question: "This ___ my car. ",
        traduction: "(Este é o meu carro.)",
        options: ["are", "is", "be", "am"],
        answer: 1
    },
    {
        question: "You and I ___ good friends. ",
        traduction: "(Você e eu somos bons amigos.)",
        options: ["are", "is", "am", "be"],
        answer: 0
    },
    {
        question: "She ___ not a student. ",
        traduction: "(Ela não é uma estudante.)",
        options: ["am", "is", "are", "be"],
        answer: 1
    },
    {
        question: "They ___ not at the park. ",
        traduction: "(Eles não estão no parque.)",
        options: ["is", "are", "be", "am"],
        answer: 1
    },
    {
        question: "We ___ very hungry. ",
        traduction: "(Nós estamos com muita fome.)",
        options: ["are", "is", "be", "am"],
        answer: 0
    },
    {
        question: "I ___ a programmer. ",
        traduction: "(Eu sou um programador.)",
        options: ["be", "am", "is", "are"],
        answer: 1
    },
    {
        question: "It ___ not cold outside. ",
        traduction: "(Não está frio lá fora.)",
        options: ["is", "are", "am", "be"],
        answer: 0
    },
    {
        question: "You ___ not late. ",
        traduction: "(Você não está atrasado.)",
        options: ["are", "is", "be", "am"],
        answer: 0
    },
    {
        question: "She ___ my best friend. ",
        traduction: "(Ela é minha melhor amiga.)",
        options: ["be", "are", "is", "am"],
        answer: 2
    },
    {
        question: "We ___ excited for the trip. ",
        traduction: "(Nós estamos animados para a viagem.)",
        options: ["is", "be", "am", "are"],
        answer: 3
    }
];





// frases simples
let questSimplePhrases = [
    {
        question: "Good morning! How ___ you?",
        traduction: "(Bom dia! Como ___ você?)",
        options: [ "are", "am","is", "was"],
        answer: 0
    },
    {
        question: "I ___ a cup of coffee every morning.",
        traduction: "(Eu ___ uma xícara de café todas as manhãs.)",
        options: ["drinks", "drink", "drank", "drinking"],
        answer: 1
    },
    {
        question: "They ___ to the park on Sundays.",
        traduction: "(Eles ___ ao parque aos domingos.)",
        options: ["go", "goes", "went", "going"],
        answer: 0
    },
    {
        question: "She ___ a beautiful dress today.",
        traduction: "(Ela ___ um vestido lindo hoje.)",
        options: ["wear", "wears", "wore", "wearing"],
        answer: 1
    },
    {
        question: "We ___ lunch together every Friday.",
        traduction: "(Nós ___ o almoço juntos toda sexta-feira.)",
        options: ["have", "has", "had", "having"],
        answer: 0
    },
    {
        question: "He ___ very happy with his new job.",
        traduction: "(Ele ___ muito feliz com seu novo trabalho.)",
        options: [ "are", "was", "be", "is"],
        answer: 3
    },
    {
        question: "Can you ___ the door, please?",
        traduction: "(Você pode ___ a porta, por favor?)",
        options: [ "opens", "opened", "opening","open"],
        answer: 3
    },
    {
        question: "I ___ in a small apartment downtown.",
        traduction: "(Eu ___ em um pequeno apartamento no centro.)",
        options: ["live", "lives", "lived", "living"],
        answer: 0
    },
    {
        question: "We ___ a great movie last night.",
        traduction: "(Nós ___ um ótimo filme na noite passada.)",
        options: ["watch", "watched", "watches", "watching"],
        answer: 1
    },
    {
        question: "She ___ very fast. She is an athlete.",
        traduction: "(Ela ___ muito rápido. Ela é uma atleta.)",
        options: ["runs", "ran", "run", "running"],
        answer: 0
    },
    {
        question: "Do you ___ ice cream?",
        traduction: "(Você ___ sorvete?)",
        options: [ "likes", "liked", "like", "liking"],
        answer: 2
    },
    {
        question: "They ___ at the party yesterday.",
        traduction: "(Eles ___ na festa ontem.)",
        options: ["dance", "danced", "dancing", "dances"],
        answer: 1
    },
    {
        question: "I ___ a new book last week.",
        traduction: "(Eu ___ um novo livro na semana passada.)",
        options: ["buy", "buys", "bought", "buying"],
        answer: 2
    },
    {
        question: "She ___ a delicious cake for the birthday party.",
        traduction: "(Ela ___ um bolo delicioso para a festa de aniversário.)",
        options: ["bake", "bakes", "baked", "baking"],
        answer: 2
    },
    {
        question: "We ___ to the beach every summer.",
        traduction: "(Nós ___ para a praia todo verão.)",
        options: ["go", "goes", "went", "going"],
        answer: 0
    },
    {
        question: "The baby ___ when he is hungry.",
        traduction: "(O bebê ___ quando está com fome.)",
        options: ["cry", "cries", "cried", "crying"],
        answer: 1
    },
    {
        question: "Can you ___ me the salt, please?",
        traduction: "(Você pode ___ o sal para mim, por favor?)",
        options: [ "passes", "passed", "passing", "pass"],
        answer: 3
    },
    {
        question: "I ___ to music while studying.",
        traduction: "(Eu ___ música enquanto estudo.)",
        options: ["listen", "listens", "listened", "listening"],
        answer: 0
    },
    {
        question: "He always ___ his homework on time.",
        traduction: "(Ele sempre ___ sua lição de casa a tempo.)",
        options: ["do", "does", "did", "doing"],
        answer: 1
    },
    {
        question: "We ___ to visit our grandparents this weekend.",
        traduction: "(Nós ___ visitar nossos avós neste fim de semana.)",
        options: ["plans", "planned", "plan", "planning"],
        answer: 2
    }
];







let questNumber =[
    {
        question: "What is the word for the number 1? (Qual é a palavra para o número 1?)",
        traduction: "",
        options: ["One", "Three", "Four", "Two"],
        answer: 0
    },
    {
        question: "What is the word for the number 5? (Qual é a palavra para o número 5?)",
        traduction: "",
        options: ["Six", "Seven", "Five", "Four"],
        answer: 2
    },
    {
        question: "What is the word for the number 10? (Qual é a palavra para o número 10?)",
        traduction: "",
        options: ["Nine", "Ten", "Eight", "Seven"],
        answer: 1
    },
    {
        question: "What is the word for the number 3? (Qual é a palavra para o número 3?)",
        traduction: "",
        options: ["Two", "Three", "Four", "One"],
        answer: 1
    },
    {
        question: "What is the word for the number 8? (Qual é a palavra para o número 8?)",
        traduction: "",
        options: ["Eight", "Nine", "Seven", "Six"],
        answer: 0
    },
    {
        question: "What is the word for the number 7? (Qual é a palavra para o número 7?)",
        traduction: "",
        options: ["Six", "Seven", "Five", "Eight"],
        answer: 1
    },
    {
        question: "What is the word for the number 2? (Qual é a palavra para o número 2?)",
        traduction: "",
        options: ["Four", "Two", "Three", "One"],
        answer: 1
    },
    {
        question: "What is the word for the number 4? (Qual é a palavra para o número 4?)",
        traduction: "",
        options: ["Five", "Four", "Two", "Three"],
        answer: 1
    },
    {
        question: "What is the word for the number 9? (Qual é a palavra para o número 9?)",
        traduction: "",
        options: ["Nine", "Eight", "Seven", "Ten"],
        answer: 0
    },
    {
        question: "What is the word for the number 6? (Qual é a palavra para o número 6?)",
        traduction: "",
        options: ["Six", "Five", "Seven", "Four"],
        answer: 0
    }
];

