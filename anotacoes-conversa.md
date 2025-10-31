# Conversa durante o desenvolvimento

## Início e Setup do Git
**P:** "como colocar essa pasta como repositório do github"  
**R:** Precisamos inicializar o git e conectar ao repositório remoto.

**P:** "como eu sei o url do repositório?"  
**R:** Pode ser encontrado no GitHub:
- No botão "Code"
- Copiar URL HTTPS ou SSH
- Ou usar `git remote -v` se já estiver configurado

**P:** "eu posso mudar o nome do repositório depois?"  
**R:** Sim, pelo GitHub em Settings → Repository name. O GitHub cria redirecionamentos automáticos.

## Branches
**P:** "O Fluxo de Branch Básico - o que ele quer dizer?"  
**R:** 
- `main` é a versão "limpa" e estável do código
- Criamos `desenvolvimento` para trabalhar
- Depois juntamos com a `main` quando tudo estiver funcionando

**P:** "mas no meu github só tem uma branch até agr"  
**R:** Resolvido enviando a nova branch para o GitHub com `git push -u origin desenvolvimento`

## Desenvolvimento do Site
**P:** "q q é esse card do spotify?"  
**R:** Uma caixinha/quadrado que mostra:
- Imagem da capa do álbum/música
- Nome da música
- Nome do artista

**P:** "mas esse efeito de hover não faz com o js e não com o css?"  
**R:** Não! O `:hover` é um recurso do CSS para efeitos simples. JavaScript seria para efeitos mais complexos.

**P:** "então eu tinha feito um card no html / css. o java script agora só pegou esse modelo ed codigo e duplicou?"  
**R:** Sim! O CSS é como uma receita que diz como o card deve parecer, e o JavaScript usa essa receita para criar vários cards diferentes.

## Git e VS Code
**P:** "pq tem um m no apps js e ele tá em laranja?"  
**R:** O 'm' e a cor laranja indicam que o arquivo foi modificado mas as mudanças ainda não foram salvas no git.

## Organização do Projeto
**P:** "não pode ter conflito de arquivo por terem dois arquivos para cada, a versão anotações a original?"  
**R:** Convertemos as anotações para formato Markdown (.md):
- Evita conflitos
- Melhor para documentação
- Formatação bonita no GitHub

## Lista de Músicas
- My Way Home Is Through You - My Chemical Romance
- Match Into Water - Pierce The Veil
- The Adults Are Talking - The Strokes
- Dr. Sunshine is Dead - Will Wood and the Tapeworms

## Estrutura Final do Projeto
1. Arquivos do projeto:
   - `index.html` - estrutura do site
   - `style.css` - estilos
   - `app.js` - lógica/funcionamento

2. Arquivos de anotações:
   - `anotacoes-html.md` - dúvidas sobre HTML
   - `anotacoes-css.md` - dúvidas sobre CSS
   - `anotacoes-js.md` - dúvidas sobre JavaScript
   - `anotacoes-conversa.md` - registro do desenvolvimento
