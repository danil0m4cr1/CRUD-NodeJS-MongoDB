# CRUD com Node.js e MongoDB

<h2>Como rodar</h2> 
O banco roda em `mongodb://localhost:27017/crudDB`.

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

## Criação de máquina com método POST
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


Clique em Send e a máquina será criado no banco.

## Listar todas as máquinas com método GET

Clique em New Request.

Método GET.

URL:

http://localhost:3000/maquinas


Clique em Send → você verá a lista de máquinas cadastradas.

## Buscar máquina por ID com método GET

Copie o id de alguma máquina retornada na listagem.

Crie uma requisição GET com a URL:

http://localhost:3000/maquinas/COLOQUE_O_ID_AQUI

## Atualizar máquina com método PUT

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



Clique em Send e a máquina será atualizada.

## Deletar máquina com método DELETE

Crie uma requisição DELETE.

URL: http://localhost:3000/maquinas/COLOQUE_O_ID_AQUI


Clique em Send e a máquina será removida.

