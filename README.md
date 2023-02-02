# Projeto para urbanaPE
A aplicação consiste em um CRUD de usuários, podendo estes usuários ter vários ou nenhum cartão.

### Pré-requesitos
+ Spring 3.0.^
+ MySQL 8.^
+ + Utilizar preferencialmente Workbench
+ Java 18.^
+ Insomnia 7.^
+ Angular 15^

### BackEnd: Como executar
+ criar esquema no banco de dados MySQL com o nome: "urbanape".
+ em users-vem > src > main > resources > aplication.properties
+ ajustar "spring.datasource.username" de acordo com o username criado no seu schema
+ ajustar "spring.datasource.password" de acordo com o password criado no seu schema
### FrontEnd: Como executar
+ Ao entrar na pasta frontend/users-vem, execute o comando: npm install
+ Aguardar as instalações dos pacotes necessários do angular
+ Concluindo as instalações, é só rodar o servidor do angular com o comando: <npm start> E claro, também precisa estar com o spring em execução para persistência e leitura dos dados.
