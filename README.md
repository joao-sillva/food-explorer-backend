> Há um erro de renderização de imagem, tópico foi criado no fórum da comunidade sobre o problema e aguardando retorno de como resolver-lo. Fora isso, restante da aplicação está funcionando. Link do tópico: https://app.rocketseat.com.br/h/forum/explorer/7b6aefec-52d8-44cd-84fb-e1cb0d28b35e

<br>
<br>

<a name="readme-top"></a>

<div align="center">
  <img src=".github/brand.svg">

  <br>
  <br>

  <p>
    <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-estrutura">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologisa">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-utilização">Utilização</a>
  </p>
  
  <a href="#-license">
    <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=348BA7&labelColor=000000">
  </a>
</div>

## 1️⃣ Sobre o projeto

O projeto Food Explorer consiste no desafio final do programa Explorer da Rocketseat. Trata-se de uma aplicação de cardápio digital para um restaurante fictício. O back-end do projeto, que lida com a lógica e o armazenamento dos dados, o front-end da aplicação, responsável pela interface do usuário, está disponível em https://github.com/joao-sillva/food-explorer-frontend

## 2️⃣ Estrutura
* Usuários
* Pratos
* Ingredientes dos pratos
* Favoritos
* Carrinhos
* Itens dos carrinhos
* Pedidos
* Itens dos pedidos

## 2️⃣ Tecnologias

- Bcrypt.js
- CORS
- Dotenv
- Express.js
- express-async-errors
- JSON Web Token
- Knex.js
- Node.js
- Multer
- PM2
- SQLite
- SQLite3

## 3️⃣ Utilização
O back-end do projeto está hospedado no endereço https://food-explorer-backend-f3wr.onrender.com/ A aplicação Food Explorer está disponível em https://food-explorer-frontend2024.netlify.app/

⚠️ **Importante**: Este projeto utiliza uma hospedagem gratuita para o back-end, portanto, pode haver atrasos no tempo de resposta do servidor.

Você também pode executá-lo em sua máquina localmente. Certifique-se de ter o ``Node.js`` e o ``npm`` instalados antes de prosseguir com as etapas abaixo:

1. Clone o projeto:

```
$ git clone https://github.com/joao-sillva/food-explorer-backend
```

2. Acesse a pasta do projeto:

```
$ cd food-explorer-backend
```

3. Instale as dependências:

```
$ npm install
```

4. Execute as migrações:

```
$ npm run migrate
```

5. Inicie o servidor:

```
$ npm run dev
```

## 📢 Aviso
Crie um arquivo .env de acordo com o arquivo .env.example e preencha os campos AUTH_SECRET com suas respectivas informações. Utilize o md5 hash para gerar uma sequência de caracteres segura

## ✨ Author
Feito por João Victor, se você tiver alguma dúvida ou quiser entrar em contato, você pode me enviar uma mensagem pelo
[LinkedIn](https://www.linkedin.com/in/joao-sillva/).

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
