# Meus Repositórios

## Sobre

É uma aplicação que lista os repositórios GitHub públicos do usuário CristianeMayara e permite ver a lista de últimos commits de cada repositório.

API utilizada: https://developer.github.com/v4/

Documentação: http://my-repositories-doc.surge.sh/

Aplicação: https://my-repositories.herokuapp.com/

<p style="display:flex; flex-direction:row">
  <img src="https://github.com/CristianeMayara/my-repositories/blob/master/docs/mobile-my-repositories.png" height="325px" />

  <img src="https://github.com/CristianeMayara/my-repositories/blob/master/docs/ipad-my-repositories.png" height="405px" />
</p>

## Como iniciar o projeto

- Clonar o repositório
- Definir as variáveis de ambiente no arquivo `public/environment.js`

```
window.apiBaseUrl = 'https://api.github.com/graphql';
window.token = <your-token-here>;
```

- Instalar as dependências com `yarn install`
- Iniciar o servidor de desenvolvimento com `yarn start`

## Comandos disponíveis

- `yarn test`
- `yarn lint`
- `yarn doc:build`
- `yarn doc:dev`

## Telas

A aplicação possui duas telas:

- Lista de repositórios, com scroll infinito, e com a funcionalidades de ordenação (por nome, estrelas e data de criação) e acesso a lista de commits dos repositórios.
- Lista de commits com detalhes de data e autor, com scroll infinito.

## Tecnologias

A aplicação foi desenvolvida utilizando as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [GitHub Developer](https://developer.github.com/)
- [React Router](https://reacttraining.com/react-router/)
- [GraphQL](https://www.apollographql.com/)
- [Apollo](https://www.apollographql.com/)
- [Styled-components](https://www.styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [Docz](https://www.docz.site/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

Mais detalhes podem ser encontrados no arquivo package.json do projeto.

## Funcionalidades do ES6 utilizadas

- **Spread operator**: utilizado para combinar dois arrays no scroll infinito e para criar um novo objeto com mais propriedades.
- **Arrow function**: utizadas para a criação dos componentes de uma maneira menos verbosa.
- **Map function**: utilizada para iterar os elementos dos arrays obtidos através das consultas graphql e exibi-los na tela.
- **Template Strings**: utilizada para interpolar strings que irão identificar o repositório escolhido na rota.

## Dificuldades

- Encontrar a query para busca de commits, de um determinado usuário e repositório.
