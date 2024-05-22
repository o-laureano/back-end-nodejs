Entregar zip do código sem o NODE_MODULES



Criar um servidor para armazenar uma agenda de contatos

O servidor deve possuir as seguintes rotas:

POST /v1/login

{

    email: "teste@teste.com",

    password: "password"

}



POST /v1/register

{

    email: "teste@teste.com",

    password: "password"

}



GET /v1/contatos

(apenas para usuarios logados)

retornar todos os contatos de um usuário

[

{

          id: 1

          name: "John Doo"

          phone: 99999999999

          email: "teste@gmail.com"

}

]



POST /v1/contato

(apenas para usuarios logados)

Adicionar um contato

Request:

{

          name: "John Doo"

          phone: 99999999999

          email: "teste@gmail.com"

}



Response:

{

          id: 1

          name: "John Doo"

          phone: 99999999999

          email: "teste@gmail.com"

}



PUT /v1/contato/:id

(apenas para usuarios logados)

Atualizar um contato

Request:

{

          name: "John Doo"

          phone: 99999999999

          email: "teste@gmail.com"

}



Response:

{

          id: 1

          name: "John Doo"

          phone: 99999999999

          email: "teste@gmail.com"

}



DELETE /v1/contato/:id

(apenas para usuarios logados)

Deletar um contato



---

O projeto deve:
- Seguir exatamente a assinatura das rotas propostas a cima

- Utilizar o banco de dados sqlite

- Validar todas as requisições e garantir que:

    - email tem um formato valido

    - Telefone tem um formato valido

    - outros

- Validar casos de erro