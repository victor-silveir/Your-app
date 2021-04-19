## Descrição do projeto:
 
Interface da aplicação YourApp, uma aplicação para realizar cadastro, deleção e atualização de clientes utilizando autenticação de usuários.

Sumário
=================
<!--ts-->
   * [Descrição do Projeto](#descrição-do-projeto)
   * [Sumário](#sumário)
    * [Tecnologias utilizadas](#Tecnologias-utilizadas)
   * [Como instalar e rodar o projeto](#Como-instalar-e-rodar-o-projeto)
      * [Pré Requisitos](#pré-requisitos)
      * [Build do Projeto](#build-do-projeto)
* [Uso e Endpoints Liberados](#uso-e-endpoints-liberados)
        
* [Considerações Finais](#considerações-finais)
<!--te-->


## Estrutura do projeto
```
.
├── src/
|   ├── components/                
|   |   ├── basic components/
|   |   |    ├── background/    
|   |   |    ├── button/
|   |   |    ├── ErrorsMessage
|   |   |    ├── input/
|   |   |    └── span/
|   |   |       
|   |   ├── customer-card/
|   |   ├── customers-list/
|   |   ├── footer/
|   |   ├── form-login/
|   |   ├── header/
|   |   ├── modal/
|   |   ├── new-customer-form/
|   |   ├── update-customer-form/
|   |
|   ├── hooks/                    
|   |   └── ...                     
|   ├── models/                       
|   |   └── ...
|   ├── services/                      
|     ├── axios/
|     |    └── ...      
|     └── validation/
|          └── ...          
|        
├── pages/ 
|   ├── customers/
|   ├── home/
|   ├── index.tsx
|   └── ...
├── public/
|   └── img/
|        └── ...
|
└── ...
```


## Tecnologias utilizadas: 

* Next.Js - Framework react com a vantagem de SSR, foi escolhido também pela facilidade em construir páginas estáticas com altas performances e fácil deploy na Vercel.

* TypeScript - JavaScript tipado.

* React - Biblioteca JavaScript criado pelo o facebook para criação de interfaces de usuários.

* Axios - Cliente Http baseado em promises para fazer requisições.

* Framer-motion - Uma biblioteca de animações para React.

* Styled Components - Biblioteca que permite a escrita de CSS usando JavaScript para a criação de componentes em React.

* React hook form - Biblioteca para lidar com formulários em React.

* Yup - Biblioteca para validações em React.


# Como instalar e rodar o projeto: 

## Pré Requisitos:

Para poder rodar o projeto na sua máquina é necessário ter instalado [NodeJs](https://nodejs.org/en/).

Por outro lado, caso não queira o projeto rodando na sua máquina é possível acessar a aplicação, que está sendo hospedada na vercel pelo link: https://your-app.vercel.app/.


## Build do projeto:

Após baixar o projeto, abra o terminal de comando na raíz do projeto e execute o seguinte comando:

```sh
npm install
```

Este comando irá instalar os módulos para que o node possa rodar o projeto. Após isso execute o seguinte comando:

```sh
yarn dev
```
Após subir a aplicação, acesse http://localhost:3000 para poder utilizá-la.

# Uso e endpoints liberados

Para utilizar a aplicação é necessário ser um usuário cadastrado, para isso, a aplicação conta com 2 usuários pré-cadastrados:

* admin (username: admin, password: 123456).
* comum (username: comum, password: 123456).


Sendo que o usuário admin tem acesso completo na aplicação enquanto o usuário comum tem apenas permissão de leitura, não sendo possível cadastrar, alterar e deletar clientes com este usuário.

# Considerações Finais

* Foi utilizado para mostrar notificações para o usuário a função alert, do próprio JavaScript, o próximo passo seria a criação de uma biblioteca de "Toasts" para realizar essas notificações de sucesso e erro.
* Como dito anteriormente, o design dessa aplicação foi desenvolvido por mim, uma opção de evolução da aplicação seria melhorar o design de notificação de erros de validação (Caso o usuário não preencha algum campo de forma válida).
* Não existe a função de cadastrar novos usuários, apenas usar os usuários já cadastrados, o próximo passo seria implementar o cadastro de usuários.
