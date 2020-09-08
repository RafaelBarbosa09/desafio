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

<h2>Dashboard</h2>
<p>A primeira tela  o dashboard onde vemos todos os polos cadastrados(É NECESSÁRIO O CADASTRO).</p>

![print-desafio1](https://user-images.githubusercontent.com/33499163/92421182-b0404800-f14d-11ea-9eb5-068ab8a649a3.png)


<h2>Detalhes do polo</h2>
<p>Essa tela mostra todos os detalhes do polo e todas as ordens de serviço cadastradas para ele.</p>

![print-desafio2](https://user-images.githubusercontent.com/33499163/92421192-ba624680-f14d-11ea-9363-070958480f76.png)

<h2>Cadastro de ordem de serviço</h2>
<p>Ao clicar em nova OS você entra na tela de cadastro de ordem de serviço. Os parametros de nome do polo e id do polo já so preenchidos na passagem.</p>
  
![print-captura3](https://user-images.githubusercontent.com/33499163/92421199-c1895480-f14d-11ea-80f9-df32f9040280.png)



