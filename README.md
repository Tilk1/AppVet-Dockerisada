# Pasos

Instalar node y npm

1- Instalar node,  https://nodejs.org/es (deberia venir con npm)
2- npm install  (en el directorio raiz)

___________________

Montar Base de datos:

1- instalar xaamp

4- npm install --save mysql2

5- npx sequelize-cli db:create

6- npx sequelize-cli model:generate --name User --attributes user:string,name:string,rol:string,pass:string

7- npx sequelize-cli db:migrate

8- npx sequelize-cli db:seed:all  // para cargar datos random

Ejecutar:

8- nodemon app
