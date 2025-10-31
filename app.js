// Array de músicas (como se fosse um banco de dados)
const musicas = [
    {
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        capaUrl: "imagens/bohemian.jpg"
    },
    {
        titulo: "Billie Jean",
        artista: "Michael Jackson",
        capaUrl: "imagens/billie-jean.jpg"
    },
    {
        titulo: "Garota de Ipanema",
        artista: "Tom Jobim",
        capaUrl: "imagens/ipanema.jpg"
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
