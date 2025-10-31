// Array de músicas (como se fosse um banco de dados)
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

// Função para criar os cards de música
function criarCards() {
    const container = document.body; // Onde vamos colocar os cards
    
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
