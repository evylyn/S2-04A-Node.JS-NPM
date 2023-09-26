# S2-04A-Node.JS-NPM

Participantes:
Carol 
Evelyn dos Santos Moura
Isadora
Isabella Maria Assis Patrício
Lívia Macedo de Oliveira
Vitor



Nunjucks
Nunjucks é uma template engine, que permite a manipulação do HTML com conteúdo Javascript facilmente. Além de possuir todo o controle de fluxo, loops e variáveis (que os outros template engine possuem) ele também suporta alguns elementos de composição de página mais avançados, como: Herança em bloco, herança de layout, funções.

Cors

. É um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens

. É um mecanismo usado para adicionar cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente

https://blog.ricardodantas.dev/como-configurar-o-cors-no-node-js/#:~:text=Para%20habilitar%20o%20CORS%20para,precisamos%20instalar%20a%20depend%C3%AAncia%20cors.&tex

t=Ap%C3%B3s%20isso%20basta%20irmos%20em,e%20fazer%20a%20devida%20configura%C3%A7%C3%A3o.







Passport-local
"passport-local" é um pacote npm para autenticação de usuário em aplicativos Node.js. É uma estratégia de autenticação para o middleware “Passport” que permite autenticação local baseada em nome de usuário (ou e-mail) e credenciais de senha. Isso é útil para autenticar usuários do seu aplicativo sem depender de autenticação de terceiros (como redes sociais). "passport-local" é configurável e personalizável e costuma ser usado com um banco de dados para verificar informações do usuário, como senhas criptografadas. É uma ferramenta inestimável para implementar com eficiência a autenticação local em aplicativos Node.js

Passport-jwt
A estratégia JWT do Passport.js é projetada para autenticar usuários com base em tokens JWT (JSON Web Tokens). Ela permite que você verifique a autenticidade dos tokens JWT recebidos em solicitações HTTP, geralmente no cabeçalho de autorização, e identifique os usuários com base nas informações contidas nos tokens.
As principais funções são:
1. Verificação de Token: O Passport JWT verifica a assinatura e a integridade de um token JWT para garantir que não tenha sido adulterado.
2. Extração de Dados: Ele extrai informações relevantes

npm install passport-jwt

Mocha

O Mocha é um framework de teste popular em JavaScript. Ele organiza nossos casos de teste e executa-os para nós. No entanto, o Mocha não verifica o comportamento do nosso código.

Husky

Husky é um pacote npm que torna os hooks Git fáceis. Quando você inicia o Git (a ferramenta de controle de versão com a qual você provavelmente está familiarizado) em um projeto, ele vem automaticamente com um recurso chamado hooks.

Os hooks citados acima são scripts executados com automação toda vez que um evento específico ocorre em um Repositório do Git. Eles deixam você personalizar o comportamento interno do Git e acionar ações personalizáveis em pontos-chave do ciclo de vida do desenvolvimento.

<br>

# Cors

// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Habilitar o CORS para todas as origens
app.use(cors());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Servidor Node.js com CORS habilitado na porta 8000.');
});

// Iniciar o servidor na porta 8000
app.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});
