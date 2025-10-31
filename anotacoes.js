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

P: Por que usar JavaScript para lista em vez de HTML?
R: Poderíamos fazer no HTML, mas o JS tem vantagens:
   1. Mais fácil de atualizar (não precisa editar HTML manualmente)
   2. Dados podem vir de um servidor/API depois
   3. Podemos filtrar, ordenar e modificar a lista facilmente
   4. Se tiver 100 músicas, é mais organizado ter em JS que no HTML

P: O que é um array de dados?
R: É como uma lista numerada:
   musicas[0] = {titulo: "Bohemian Rhapsody", artista: "Queen", ...}
   musicas[1] = {titulo: "Billie Jean", artista: "Michael Jackson", ...}
   musicas[2] = {titulo: "Garota de Ipanema", artista: "Tom Jobim", ...}

P: Como o JavaScript cria cards automaticamente?
R: Passo a passo do que o código faz:
   1. Para cada música no array (forEach):
   2. Cria uma nova div (document.createElement)
   3. Adiciona a classe 'musica-card' nessa div
   4. Coloca o HTML do card dentro da div (titulo, artista, imagem)
   5. Adiciona essa div na página
   
   É como uma fábrica: pega cada música da lista e monta um card!

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
