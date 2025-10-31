/* DÚVIDAS E RESPOSTAS SOBRE O CÓDIGO JAVASCRIPT

P: Quando precisamos usar JavaScript ao invés de CSS?
R: Para interações mais complexas como:
   - Tocar música
   - Abrir menus
   - Animações complexas
   - Comunicação com servidor
   - Mudanças que dependem de dados ou cálculos

P: Como conectar o JavaScript com o HTML?
R: Usando a tag <script> no final do body do HTML:
   <script src="script.js"></script>

P: O que é um array de objetos?
R: É uma lista que guarda vários "pacotes" de informações relacionadas.
   Exemplo: cada música tem título, artista e capa.

P: Por que criar dados falsos?
R: Para testar o site enquanto não temos um banco de dados real.
   Ajuda a ver como o site vai ficar com dados reais.

P: Como esse array será usado?
R: JavaScript vai pegar esses dados e criar os cards do Spotify 
   automaticamente para cada música da lista.

P: Por que os dados não aparecem no site?
R: Precisamos de 3 coisas:
   1. Conectar o app.js no HTML usando <script src="app.js">
   2. Criar uma função que transforma os dados em cards visíveis
   3. Chamar essa função quando a página carregar

*/

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
