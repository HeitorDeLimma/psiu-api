# Psiu API

## Requisitos

### Aluno

- [x] Cadastrar aluno
  - [x] Não deve ser possível cadastrar RA já cadastrado
  - [x] Gerar senha aleatória para primeiro acesso
  - [x] Criar hash para a senha aleatória gerada

- [x] Editar aluno
  - [x] Deve ser possível alterar o nome e data de nascimento do aluno
  - [x] Não deve ser possível atualizar um student inativo
  
- [x] Atualizar senha
  - [x] Não deve ser possível colocar uma senha fraca
  - [x] Checar a senha atual do estudante
  - [x] Confirmar nova senha duas vezes

- [x] Deletar aluno
  - [x] Deve utilizar soft delete
  - [x] Não deve ser possível deletar um student inativo
  
- [x] Buscar alunos
  - [] Criar páginação na busca de alunos

### Autenticação

- [x] Autenticação com senha
  - [x] Não deve ser posível autenticar um estudante inativo
  - [x] Verificar se o RA existe
  - [x] Criar um token de autenticação
- [x] Criar middleware de autenticação
  - [x] Não deve ser posível passar um estudante inativo/inexistente 
  - [x] Deve verificar o id do estudante com id presente no token
  - [x] Deve verificar a validade do token

### Post

- [x] Criar post
- [x] Editar post
  - [x] Dever ser possível editar o conteúdo do post
- [x] Deletar post
- [x] Buscar posts
 - [X] Incluir comentários
  - [] Incluir reações
 - [X] Incluir reações
 - [] Criar paginação
- [x] Buscar posts por aluno
 - [] Criar paginação

### ComentarioPost

- [X] Criar comentário
- [X] Editar comentário
- [X] Deletar comentário

### ReacaoPost

- [X] Criar reação para post/comentários
  - [X] Remover reação 
  - [X] Apoio ❤️
  - [X] Entendo você 👐
  - [X] Força 💪
  - [X] Tristeza 😢
  - [X] Estamos juntos 🤝
- [X] Deletar reação

### ReacaoComentario

- [X] Criar reação
  - [X] Remover reação 
  - [X] Apoio ❤️
  - [X] Entendo você 👐
  - [X] Força 💪
  - [X] Tristeza 😢
  - [X] Estamos juntos 🤝
- [X] Deletar reação
