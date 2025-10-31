/* <span class="precode-question// P: "então eu tinha feito um card no html / css. o java script agora só pegou esse modelo ed codigo e duplicou?"
// R: Quase isso! O CSS é como uma receita que diz como o card deve parecer,
//    e o JavaScript usa essa receita para criar vários cards diferentes,
//    cada um com sua própria música.

// P: "Agora, vamos mostrar esses dados no site. Como fazemos isso?"
// R: Precisamos:
//    1. Criar uma div no HTML com id='lista-de-musicas'
//    2. No JavaScript, pegar essa div usando getElementById
//    3. Criar os cards dentro dessa div em vez de direto no body
//    4. Esperar a página carregar usando DOMContentLoaded   P: "o que é esse array de dados e como o js cria os cards de forma automatica?"
   R: Array é como uma lista numerada de músicas. O JS funciona como um robô:
      - Lê cada música da lista
      - Pega o "molde" do card
      - Preenche com as informações da música
      - Coloca na página
   </span> */
const musicas = [
    {
        titulo: "My Way Home Is Through You",
        artista: "My Chemical Romance",
        capaUrl: "imagens/mcr.jpg"
    },
    {
        titulo: "Match Into Water",
        artista: "Pierce The Veil",
        capaUrl: "imagens/ptv.jpg"
    },
    {
        titulo: "The Adults Are Talking",
        artista: "The Strokes",
        capaUrl: "imagens/strokes.jpg"
    },
    {
        titulo: "Dr. Sunshine is Dead",
        artista: "Will Wood and the Tapeworms",
        capaUrl: "imagens/willwood.jpg"
    }
];

/* <span class="precode-question">
   P: "então eu tinha feito um card no html / css. o java script agora só pegou esse modelo ed codigo e duplicou?"
   R: Quase isso! O CSS é como uma receita que diz como o card deve parecer,
      e o JavaScript usa essa receita para criar vários cards diferentes,
      cada um com sua própria música.
   </span> */
function criarCards() {
    const container = document.body;
    
    musicas.forEach(musica => {
        const card = document.createElement('div');
        card.className = 'musica-card';
        
        card.innerHTML = `
            <img src="${musica.capaUrl}" alt="Capa de ${musica.titulo}">
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
        `;
        
        container.appendChild(card);
    });
}

// Criar os cards quando a página carregar
criarCards();

// --- Dúvidas Gerais ---
// P: "mas por que vc ta usando js se lista é coisa de html?"
// R: O JS tem vantagens:
//    - Mais fácil de atualizar
//    - Dados podem vir de um servidor depois
//    - Podemos filtrar e ordenar facilmente
//    - Mais organizado para muitos itens

// P: "a gnt ta fazendo de musicas específicas ou de capas de album?"
// R: Estamos fazendo cards de músicas específicas, onde cada música tem:
//    - Seu próprio título
//    - Seu próprio artista
//    - A capa do álbum onde ela está

// P: "pq tem um m no apps js e ele tá em laranja?"
// R: O 'm' indica que o arquivo foi modificado (modified) mas as mudanças
//    ainda não foram salvas no git. A cor laranja no VS Code também indica isso.
//    Para resolver: usar 'git add app.js' e depois 'git commit'
