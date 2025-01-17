
// irei usar o "dataName" pra fazer a comparaçao e ver se a frase foi traduzida da forma correta
const frasesEpalavras = [
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


