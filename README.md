# :checkered_flag: Bu!

Bu! é uma base de dados grátis e de código aberto, sobre filmes e seriados, atualizado pelo apoio da comunidade, na qual a temática principal é sobre filmes de terror.

## :technologist: Membros da equipe

- Francisco Álisson Véras Damasceno, 473558, Design Digital
- Gabriel Ileis, 493973, Ciência da Computação

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Admin
- Usuário logado
- Visitante

## :spiral_calendar: Entidades ou tabelas do sistema

- Usuário
- Filme
- Comentário

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

- O adminstrador da loja pode: adicionar, remover e editar os filmes.
- Usuário registrador pode listar os filmes e seus detalhes, assim como usuários não registrados. Adicionalmente, eles podem escrever comentários sobre os filmes.
- Usuário não registrador poderão ver os filmes e os comentários feitos por usuários registrados.

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
| Usuário |  |  X  |  |  |
| Filme | X |  X  |  X | X |
| Comentário  | X |  X  | X | X |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| POST | /auth/local |
| GET | /users/me |
| GET | /api/filmes |
| GET | /api/filmes/{id} |
| POST | /api/filmes |
| PUT | /api/filmes/{id} |
| DELETE | /api/filmes/{id} |
