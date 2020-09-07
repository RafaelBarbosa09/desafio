# desafio
Para rodar a aplicação é necessário antes executar o comando "yarn" para instalar todas as dependências do projeto(válido para o backend e o frontend).

O banco de dados foi configurado em uma imagem docker do postgres. os dados são:
host: localhost
porta: 5432
usuário: postgres
senha: root
database: desafio_stone

OBS: é necessário criar a database -> desafio_stone

obs: Esses dados estão especificados no arquivo de configuração chamado ormconfig.json

Para criar as tabelas do banco é necessário rodar as migrations
yarn typeorm migration:run


Após instalar as dependências a aplicação backend poderá ser iniciada
backend -> yarn dev:server
frontend -> yarn start




