# CRUD com Node.js, Express e MongoDB (Local)

Este projeto implementa um CRUD de maquinas em **Node.js + Express + MongoDB**, rodando localmente.

## Pré-requisitos

1. Instalar **Node.js** (versão LTS).  
2. Instalar **MongoDB Community Server** (banco local).  

## Como rodar

O banco roda localmente em `mongodb://localhost:27017/crudDB`.

npm install express mongoose

Rode o servidor:
node index.js

Acesse em:
http://localhost:3000

## Rotas CRUD

- **POST** `/maquinas` → cria maquinas.  
- **GET** `/maquinas` → lista todas as maquinas.  
- **GET** `/maquinas/:id` → busca por ID.  
- **PUT** `/maquinas/:id` → atualiza por ID.  
- **DELETE** `/maquinas/:id` → deleta por ID.  

## Criar maquina (POST)
Clique em New Request.
Escolha o método POST.
Digite a URL: http://localhost:3000/maquinas
Vá na aba Body, JSON e insira:

{
  "nome": "Prensa Hidráulica",
  "tipo": "Prensa",
  "status": "Em manutenção",
  "ultimaManutencao": "2025-09-20"
}


Clique em Send e a maquina será criado no banco.

## Listar todas as maquinas (GET)

Clique em New Request.

Método GET.

URL:

http://localhost:3000/maquinas


Clique em Send → você verá a lista de maquinas cadastradas.

## Buscar maquina por ID (GET)

Copie o _id de alguma maquina retornada na listagem.

Crie uma requisição GET com a URL:

http://localhost:3000/maquinas/COLOQUE_O_ID_AQUI

## Atualizar maquina (PUT)

Crie uma requisição PUT.

URL:

http://localhost:3000/maquinas/COLOQUE_O_ID_AQUI


Body (JSON):

{
  "nome": "NOVO NOME",
  "tipo": "NOVO TIPO",
  "status": "NOVO STATUS",
  "ultimaManutencao": "NOVA DATA"
}



Clique em Send e a maquina será atualizada.

## Deletar maquina (DELETE)

Crie uma requisição DELETE.

URL: http://localhost:3000/maquinas/COLOQUE_O_ID_AQUI


Clique em Send e a maquina será removida.

