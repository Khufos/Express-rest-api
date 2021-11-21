#  Express rest-api
# 

> ## **//// Status code e Middlewares ////**
> ## 🔗 Comando básicos para iniciar o projeto 
> 
> Crie uma pasta com um nome à sua escolha dentro dessa pasta dê o comando
> > ## **Windows**:
```console
npm init -y
```
> npm init -y  irá criar um arquivo chamado package.json dentro da sua pasta esse arquivo tera todas especificações do seu app, como nome , descrição,versão e etc. 


> Como vamos trabalhar com Express.js que é um framework para Node.js que fornece recursos mínimos para construção de servidores web. 
> Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js

```console
npm install express
```

> Depois dentro da sua pasta dê o comando.
```console
npm install nodemon
```

> Ele permite que você faça alterações em seu servidor sem ter que pressionar ctrl + c pra quebra sua aplicação starta novamente para algo atualize, 
> com nodemom apenas starta e quando você modificar seu script assim que pressionar control + s para salvar, ele irá reiniciar o servidor sozinho e 
> atualizado com as informações que você modificou.

> Resumindo: O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node.js reiniciando automaticamente o servidor.

> Sua aplicação ficaram assim:

![Interface](https://github.com/Khufos/Express-rest-api/blob/main/Screenshot_1.png)


> Depois disso é muito facil dentro da sua pasta você dê o comando:
```console
node src/index.js
```
>Porém existe um caminho mais facil para start sua aplicação dentro do arquivo package.json modifique essa linha abaixo .
```
{
  "name": "modulo03",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" <-- nessa linha basta substituir por  --> "start": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

> Então ficara assim :
```
{
  "name": "app-rest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.15"
  }
}

```
> Depois disso você só precisa da o comando:
```console
npm start
```
> Pronto sua aplicação já está rodando.
