![logo medicar](https://i.postimg.cc/DZNPJSxk/Logo.png "logo medicar")
# Desafio medicar  ( frontend)
Descrição: sistema para controlar a agenda dos médicos da clínica Medicar com o intuito de auxiliar clientes na marcação de consultas.

Autor: Thalia Ellen ( [linkedin](https://linkedin.com/in/thalia-ellen-6314a4120) )
## Funcionalidades

- Login
- Cadastro de usuários
- Listagem de consultas
- Cadastro de nova consulta

## Sobre a api utilizada
A API utilizada para este desafio foi desenvolvida a partir da api fornecida pela contratante. Foram acrecentadas apenas algumas funções. A api se encontra na pasta backend.
- Versão original da api do contratante: [api da contratante](https://github.com/Intmed-Software/desafio-mock-server).

Obs: alguns dados encontram-se mocados e fixos.

## Sobre os dados utilizados

- Para efetuar o login, o usuário padrão é:

```sh
usuario: intmed
password: challenge
```
- Este usuário também será retornado por padrão ao efetuar um cadastro.

- No cadastro de consultas a api também realiza um cadastro padrão. Como na api original se encontrava desta forma, preferi não alterar. Mas todos os dados selecionados no frontend chegam na api no formato em que o usuário está selecionando na tela, eles apenas não são tratados no back, assim como na api original. Assim como no cadastro de usuários.

## Instalação do frontend e da api

Após o download deste repositório, siga para a pasta frontend e execute o seguinte comando para a instalação de suas dependências:

```sh
npm install
```

Agora configure as váriáveis de ambiente com o link de acesso para a api na pastas src/environments no arquivo environments.development.ts alterando o atributo api :

Observação: altere o número da porta se necessário.

```sh
export const environment = {
      production: false,
      api: 'http://localhost:3000'
};
```

Agora em outro prompt de comando, redirecione para a pasta backend onde se encontra a api e execute o seguinte comando para a instalação de suas dependências:
```sh
npm install
```
Ainda na pasta da api execute o comando para iniciá-lo:
```sh
npm start
``` 
Por fim, na pasta do frontend execute o comando também para iniciá-lo:
```sh
npm start
``` 
