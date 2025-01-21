
// irei usar o "dataName" pra fazer a comparaçao e ver se a frase foi traduzida da forma correta
const traduzaFrasesAleatorias = [
    {
        frase: "Hello, how are you?",
        traducao: "Olá, como você está?",
        traduzida: [
            { palavra: "como", dataName: "b" },
            { palavra: "aeroporto", dataName: "plvDistratora" },
            { palavra: "Olá,", dataName: "a" },
            { palavra: "você", dataName: "c" },
            { palavra: "irmao", dataName: "plvDistratora" },
            { palavra: "ele", dataName: "plvDistratora" },
            { palavra: "está?", dataName: "d" }
        ]
    },
    {
        frase: "How old are you?",
        traducao: "Quantos anos você tem?",
        traduzida: [
            { palavra: "anos", dataName: "b" },
            { palavra: "novo", dataName: "plvDistratora" },
            { palavra: "tem?", dataName: "d" },
            { palavra: "Quantos", dataName: "a" },
            { palavra: "idade", dataName: "plvDistratora" },
            { palavra: "você", dataName: "c" },
            { palavra: "velho", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "Thank you very much.",
        traducao: "Muito obrigado.",
        traduzida: [
            { palavra: "Muito", dataName: "a" },
            { palavra: "por", dataName: "plvDistratora" },
            { palavra: "favor", dataName: "plvDistratora" },
            { palavra: "sempre", dataName: "plvDistratora" },
            { palavra: "obrigado.", dataName: "b" },
            { palavra: "nada", dataName: "plvDistratora" },
            { palavra: "tudo", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "What's up?",
        traducao: "E aí? Tudo bem?",
        traduzida: [
            { palavra: "feliz", dataName: "plvDistratora" },
            { palavra: "jacare", dataName: "plvDistratora" },
            { palavra: "e ai?", dataName: "a" },
            { palavra: "beleza", dataName: "plvDistratora" },
            { palavra: "tudo bem?", dataName: "b" },
            { palavra: "sol", dataName: "plvDistratora" },
            { palavra: "lampada", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "Good morning!",
        traducao: "Bom dia!",
        traduzida: [
            { palavra: "manhã", dataName: "plvDistratora" },
            { palavra: "dia!", dataName: "b" },
            { palavra: "noite", dataName: "plvDistratora" },
            { palavra: "tarde", dataName: "plvDistratora" },
            { palavra: "casa", dataName: "plvDistratora" },
            { palavra: "Bom", dataName: "a" },
            { palavra: "vida", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "See you later!",
        traducao: "Até mais tarde!",
        traduzida: [
            { palavra: "Até", dataName: "a" },
            { palavra: "agora", dataName: "plvDistratora" },
            { palavra: "logo", dataName: "plvDistratora" },
            { palavra: "sempre", dataName: "plvDistratora" },
            { palavra: "tarde!", dataName: "c" },
            { palavra: "mais", dataName: "b" },
            { palavra: "amanhã", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "Where are you?",
        traducao: "Onde você está?",
        traduzida: [
            { palavra: "lá", dataName: "plvDistratora" },
            { palavra: "Onde", dataName: "a" },
            { palavra: "aqui", dataName: "plvDistratora" },
            { palavra: "você", dataName: "b" },
            { palavra: "ali", dataName: "plvDistratora" },
            { palavra: "está?", dataName: "c" },
            { palavra: "longe", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "I love you.",
        traducao: "Eu te amo.",
        traduzida: [
            { palavra: "gosto", dataName: "plvDistratora" },
            { palavra: "te", dataName: "b" },
            { palavra: "amo.", dataName: "c" },
            { palavra: "adoro", dataName: "plvDistratora" },
            { palavra: "beijo", dataName: "plvDistratora" },
            { palavra: "abraço", dataName: "plvDistratora" },
            { palavra: "Eu", dataName: "a" }
        ]
    },
    {
        frase: "Can I help you?",
        traducao: "Posso te ajudar?",
        traduzida: [
            { palavra: "talvez", dataName: "plvDistratora" },
            { palavra: "Posso", dataName: "a" },
            { palavra: "ajudar?", dataName: "c" },
            { palavra: "sim", dataName: "plvDistratora" },
            { palavra: "te", dataName: "b" },
            { palavra: "não", dataName: "plvDistratora" },
            { palavra: "nunca", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "I am learning how to code in JavaScript.",
        traducao: "Estou aprendendo a programar em JavaScript.",
        traduzida: [
            { palavra: "em", dataName: "e" },
            { palavra: "aprendendo", dataName: "b" },
            { palavra: "a", dataName: "c" },
            { palavra: "Estou", dataName: "a" },
            { palavra: "Python", dataName: "plvDistratora" },
            { palavra: "programar", dataName: "d" },
            { palavra: "JavaScript.", dataName: "f" }
        ]
    }
];



// estrutura de tema pronomes demonstrativos os : this/those/that etc...
const traduzaPNdemonstrativos = [
    {
        frase: "This is my son.",
        traducao: "Este é o meu filho.",
        traduzida: [
            { palavra: "criança", dataName: "plvDistratora" },
            { palavra: "meu", dataName: "d" },
            { palavra: "filho.", dataName: "e" },
            { palavra: "é", dataName: "b" },
            { palavra: "tablete", dataName: "plvDistratora" },
            { palavra: "Este", dataName: "a" },
            { palavra: "o", dataName: "c" }
        ]
    },
    {
        frase: "This is my book.",
        traducao: "Este é meu livro.",
        traduzida: [
            { palavra: "Este", dataName: "a" },
            { palavra: "esse", dataName: "plvDistratora" },
            { palavra: "livro.", dataName: "d" },
            { palavra: "é", dataName: "b" },
            { palavra: "aquele", dataName: "plvDistratora" },
            { palavra: "meu", dataName: "c" },
            { palavra: "isso", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "That is her car.",
        traducao: "Aquele é o carro dela.",
        traduzida: [
            { palavra: "Aquele", dataName: "a" },
            { palavra: "isso", dataName: "plvDistratora" },
            { palavra: "é", dataName: "b" },
            { palavra: "carro", dataName: "d" },
            { palavra: "seu", dataName: "plvDistratora" },
            { palavra: "dela.", dataName: "e" },
            { palavra: "o", dataName: "c" }
        ]
    },
    {
        frase: "These are my friends.",
        traducao: "Estes são meus amigos.",
        traduzida: [
            { palavra: "Estes", dataName: "a" },
            { palavra: "isto", dataName: "plvDistratora" },
            { palavra: "amigos.", dataName: "d" },
            { palavra: "meus", dataName: "c" },
            { palavra: "aqueles", dataName: "plvDistratora" },
            { palavra: "são", dataName: "b" },
            { palavra: "tudo", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "Those are my daughters.",
        traducao: "Aquelas são minhas filhas.",
        traduzida: [
            { palavra: "filhos", dataName: "plvDistratora" },
            { palavra: "são", dataName: "b" },
            { palavra: "Aquelas", dataName: "a" },
            { palavra: "essas", dataName: "plvDistratora" },
            { palavra: "filhas.", dataName: "d" },
            { palavra: "minhas", dataName: "c" },
            { palavra: "meninas", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "Those are your shoes.",
        traducao: "Aqueles são seus sapatos.",
        traduzida: [
            { palavra: "aquilo", dataName: "plvDistratora" },
            { palavra: "isso", dataName: "plvDistratora" },
            { palavra: "Aqueles", dataName: "a" },
            { palavra: "são", dataName: "b" },
            { palavra: "sapatos.", dataName: "d" },
            { palavra: "estas", dataName: "plvDistratora" },
            { palavra: "seus", dataName: "c" }
        ]
    },
    {
        frase: "Is this your pen?",
        traducao: "Esta é sua caneta?",
        traduzida: [
            { palavra: "Esta", dataName: "a" },
            { palavra: "aquela", dataName: "plvDistratora" },
            { palavra: "meu", dataName: "plvDistratora" },
            { palavra: "é", dataName: "b" },
            { palavra: "isso", dataName: "plvDistratora" },
            { palavra: "caneta?", dataName: "d" },
            { palavra: "sua", dataName: "c" }
        ]
    },
    {
        frase: "Whose shoes are those?",
        traducao: "De quem são aqueles sapatos?",
        traduzida: [
            { palavra: "quem", dataName: "b" },
            { palavra: "estes", dataName: "plvDistratora" },
            { palavra: "são", dataName: "c" },
            { palavra: "De", dataName: "a" },
            { palavra: "aqueles", dataName: "d" },
            { palavra: "isso", dataName: "plvDistratora" },
            { palavra: "sapatos?", dataName: "e" }
        ]
    },
    {
        frase: "This is my house.",
        traducao: "Esta é minha casa.",
        traduzida: [
            { palavra: "minha", dataName: "c" },
            { palavra: "isto", dataName: "plvDistratora" },
            { palavra: "essa", dataName: "plvDistratora" },
            { palavra: "Esta", dataName: "a" },
            { palavra: "seu", dataName: "plvDistratora" },
            { palavra: "casa.", dataName: "d" },
            { palavra: "é", dataName: "b" }
        ]
    },
    {
        frase: "Are these your books?",
        traducao: "Estes são seus livros?",
        traduzida: [
            { palavra: "aquelas", dataName: "plvDistratora" },
            { palavra: "nossos", dataName: "plvDistratora" },
            { palavra: "seus", dataName: "c" },
            { palavra: "são", dataName: "b" },
            { palavra: "isto", dataName: "plvDistratora" },
            { palavra: "livros?", dataName: "d" },
            { palavra: "Estes", dataName: "a" }
        ]
    }
];

// estrutura de tema pronomes interrogativos: "Who", "What", "Where", "When"
const traduzaPNinterrogativos = [
    {
        frase: "Who is your teacher?",
        traducao: "Quem é seu professor?",
        traduzida: [
            { palavra: "carro", dataName: "plvDistratora" },
            { palavra: "professor?", dataName: "d" },
            { palavra: "seu", dataName: "c" },
            { palavra: "é", dataName: "b" },
            { palavra: "gato", dataName: "plvDistratora" },
            { palavra: "Quem", dataName: "a" },
            { palavra: "alto", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "What are they doing?",
        traducao: "O que eles estão fazendo?",
        traduzida: [
            { palavra: "rápido", dataName: "plvDistratora" },
            { palavra: "eles", dataName: "b" },
            { palavra: "fazendo?", dataName: "d" },
            { palavra: "parado", dataName: "plvDistratora" },
            { palavra: "baixo", dataName: "plvDistratora" },
            { palavra: "O que", dataName: "a" },
            { palavra: "estão", dataName: "c" }
        ]
    },
    {
        frase: "Where is my phone?",
        traducao: "Onde está meu telefone?",
        traduzida: [
            { palavra: "Onde", dataName: "a" },
            { palavra: "livro", dataName: "plvDistratora" },
            { palavra: "está", dataName: "b" },
            { palavra: "mesa", dataName: "plvDistratora" },
            { palavra: "meu", dataName: "c" },
            { palavra: "caneta", dataName: "plvDistratora" },
            { palavra: "telefone?", dataName: "d" }
        ]
    },
    {
        frase: "When is the meeting?",
        traducao: "Quando é a reunião?",
        traduzida: [
            { palavra: "noite", dataName: "plvDistratora" },
            { palavra: "é", dataName: "b" },
            { palavra: "antes", dataName: "plvDistratora" },
            { palavra: "cedo", dataName: "plvDistratora" },
            { palavra: "reunião?", dataName: "d" },
            { palavra: "Quando", dataName: "a" },
            { palavra: "a", dataName: "c" }
        ]
    },
    {
        frase: "Why are you sad?",
        traducao: "Por que você está triste?",
        traduzida: [
            { palavra: "você", dataName: "b" },
            { palavra: "rápido", dataName: "plvDistratora" },
            { palavra: "Por que", dataName: "a" },
            { palavra: "triste?", dataName: "d" },
            { palavra: "feliz", dataName: "plvDistratora" },
            { palavra: "está", dataName: "c" },
            { palavra: "grande", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "How do you do that?",
        traducao: "Como você faz isso?",
        traduzida: [
            { palavra: "rápido", dataName: "plvDistratora" },
            { palavra: "você", dataName: "b" },
            { palavra: "aquilo", dataName: "plvDistratora" },
            { palavra: "faz", dataName: "c" },
            { palavra: "grande", dataName: "plvDistratora" },
            { palavra: "isso?", dataName: "d" },
            { palavra: "Como", dataName: "a" }
        ]
    },
    {
        frase: "Which book do you prefer?",
        traducao: "Qual livro você prefere?",
        traduzida: [
            { palavra: "Qual", dataName: "a" },
            { palavra: "você", dataName: "c" },
            { palavra: "grande", dataName: "plvDistratora" },
            { palavra: "livro", dataName: "b" },
            { palavra: "caderno", dataName: "plvDistratora" },
            { palavra: "prefere?", dataName: "d" },
            { palavra: "rápido", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "Whose car is that?",
        traducao: "De quem é aquele carro?",
        traduzida: [
            { palavra: "carro?", dataName: "d" },
            { palavra: "rápido", dataName: "plvDistratora" },
            { palavra: "bicicleta", dataName: "plvDistratora" },
            { palavra: "é", dataName: "b" },
            { palavra: "De quem", dataName: "a" },
            { palavra: "aquele", dataName: "c" },
            { palavra: "grande", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "What time is it?",
        traducao: "Que horas são?",
        traduzida: [
            { palavra: "tarde", dataName: "plvDistratora" },
            { palavra: "rápido", dataName: "plvDistratora" },
            { palavra: "horas", dataName: "b" },
            { palavra: "cedo", dataName: "plvDistratora" },
            { palavra: "são?", dataName: "c" },
            { palavra: "agora", dataName: "plvDistratora" },
            { palavra: "Que", dataName: "a" }
        ]
    },
    {
        frase: "Who called you yesterday?",
        traducao: "Quem te ligou ontem?",
        traduzida: [
            { palavra: "te", dataName: "b" },
            { palavra: "amanhã", dataName: "plvDistratora" },
            { palavra: "ligou", dataName: "c" },
            { palavra: "hoje", dataName: "plvDistratora" },
            { palavra: "ontem?", dataName: "d" },
            { palavra: "Quem", dataName: "a" },
            { palavra: "rápido", dataName: "plvDistratora" }
        ]
    }
];



// estrutura de tema verbo tobe os
const traduzaToBe = [
    {
        frase: "I am a student.",
        traducao: "Eu sou um estudante.",
        traduzida: [
            { palavra: "professor", dataName: "plvDistratora" },
            { palavra: "médico", dataName: "plvDistratora" },
            { palavra: "um", dataName: "c" },
            { palavra: "estudante.", dataName: "d" },
            { palavra: "Eu", dataName: "a" },
            { palavra: "grande", dataName: "plvDistratora" },
            { palavra: "sou", dataName: "b" }
        ]
    },
    {
        frase: "You are very kind.",
        traducao: "Você é muito gentil.",
        traduzida: [
            { palavra: "muito", dataName: "c" },
            { palavra: "forte", dataName: "plvDistratora" },
            { palavra: "Você", dataName: "a" },
            { palavra: "é", dataName: "b" },
            { palavra: "gentil.", dataName: "d" },
            { palavra: "rápido", dataName: "plvDistratora" },
            { palavra: "fraco", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "She is a doctor.",
        traducao: "Ela é uma médica.",
        traduzida: [
            { palavra: "cantora", dataName: "plvDistratora" },
            { palavra: "médica.", dataName: "d" },
            { palavra: "professora", dataName: "plvDistratora" },
            { palavra: "é", dataName: "b" },
            { palavra: "uma", dataName: "c" },
            { palavra: "Ela", dataName: "a" },
            { palavra: "alta", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "He is very tall.",
        traducao: "Ele é muito alto.",
        traduzida: [
            { palavra: "Ele", dataName: "a" },
            { palavra: "rápido", dataName: "plvDistratora" },
            { palavra: "pequeno", dataName: "plvDistratora" },
            { palavra: "muito", dataName: "c" },
            { palavra: "alto.", dataName: "d" },
            { palavra: "baixo", dataName: "plvDistratora" },
            { palavra: "é", dataName: "b" }
        ]
    },
    {
        frase: "We are best friends.",
        traducao: "Nós somos melhores amigos.",
        traduzida: [
            { palavra: "Nós", dataName: "a" },
            { palavra: "somos", dataName: "b" },
            { palavra: "colegas", dataName: "plvDistratora" },
            { palavra: "melhores", dataName: "c" },
            { palavra: "familiares", dataName: "plvDistratora" },
            { palavra: "amigos.", dataName: "d" },
            { palavra: "desconhecidos", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "It is a sunny day.",
        traducao: "É um dia ensolarado.",
        traduzida: [
            { palavra: "nublado", dataName: "plvDistratora" },
            { palavra: "um", dataName: "b" },
            { palavra: "dia", dataName: "c" },
            { palavra: "É", dataName: "a" },
            { palavra: "frio", dataName: "plvDistratora" },
            { palavra: "ensolarado.", dataName: "d" },
            { palavra: "chuvoso", dataName: "plvDistratora" }
        ]
    },
    {
        frase: "They are at home.",
        traducao: "Eles estão em casa.",
        traduzida: [
            { palavra: "parque", dataName: "plvDistratora" },
            { palavra: "estão", dataName: "b" },
            { palavra: "trabalho", dataName: "plvDistratora" },
            { palavra: "em", dataName: "c" },
            { palavra: "casa.", dataName: "d" },
            { palavra: "Eles", dataName: "a" },
            { palavra: "escola", dataName: "plvDistratora" },
        ]
    },
    {
        frase: "This is my book.",
        traducao: "Este é o meu livro.",
        traduzida: [
            { palavra: "livro.", dataName: "e" },
            { palavra: "Este", dataName: "a" },
            { palavra: "caneta", dataName: "plvDistratora" },
            { palavra: "meu", dataName: "d" },
            { palavra: "caderno", dataName: "plvDistratora" },
            { palavra: "o", dataName: "c" },
            { palavra: "é", dataName: "b" }
        ]
    },
    {
        frase: "You are a good singer.",
        traducao: "Você é um bom cantor.",
        traduzida: [
            { palavra: "é", dataName: "b" },
            { palavra: "dançarino", dataName: "plvDistratora" },
            { palavra: "bom", dataName: "d" },
            { palavra: "um", dataName: "c" },
            { palavra: "ator", dataName: "plvDistratora" },
            { palavra: "cantor.", dataName: "e" },
            { palavra: "Você", dataName: "a" }
        ]
    },
    {
        frase: "Am I late?",
        traducao: "Estou atrasado?",
        traduzida: [
            { palavra: "quando", dataName: "plvDistratora" },
            { palavra: "cedo", dataName: "plvDistratora" },
            { palavra: "atrasado?", dataName: "b" },
            { palavra: "rápido", dataName: "plvDistratora" },
            { palavra: "grande", dataName: "plvDistratora" },
            { palavra: "Estou", dataName: "a" },
            { palavra: "trabalho", dataName: "plvDistratora" },
        ]
    }
];
