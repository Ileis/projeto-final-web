# :checkered_flag: Bu!

Bu! é uma base de dados grátis e de código aberto, sobre filmes e seriados, atualizado pelo apoio da comunidade, na qual a temática principal é sobre filmes de terror.

## :technologist: Membros da equipe

- Francisco Álisson Véras Damasceno, 473558, Design Digital
- Gabriel Ileis Araujo Vieira, 493973, Ciência da Computação

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário logado
- Visitante

## :spiral_calendar: Entidades ou tabelas do sistema

- Usuário
- Filme
- Comentário

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

- Usuário registrador pode: adicionar, remover e editar os filmes. Adicionalmente, eles podem remover os comentários sobre os filmes.
- Usuário não registrador poderão ver os filmes e os comentar nos filmes.

Descreve ou liste brevemente as principais funcionalidades da aplicação que será desenvolvida. Destaque a funcionalidades que serão acessévies a todos os usuários e aquelas restriras a usuários logados.


----

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:


----

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**
- VueJS v3.0, Vue-Router e Pinia.
- Axios
- Bootstrap

**Backend:**
- Strapi

Lista as tecnologias, frameworks e bibliotecas utilizados.


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| User | X | X |  |  |
| Movie | X |  X  |  X | X |
| Comment  | X |  X  | X | X |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL | Entidade
| --- | --- | --- |
| POST | /auth/local | User
| GET | /api/movies | Movie
| GET | /api/movies/{id} | Movie
| POST | /api/movies | Movie
| PUT | /api/movies/{id} | Movie
| DELETE | /api/movies/{id} | Movie
| GET | /api/comments | Comment
| GET | /api/comments/{id} | Comment
| POST | /api/comments | Comment
| PUT | /api/comments/{id} | Comment
| DELETE | /api/comments/{id} | Comment

