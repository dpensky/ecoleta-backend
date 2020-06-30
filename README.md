# ecoleta-backend
backend do aplicativo ecoleta desenvolvido no tutorial da Rocketseat

Backend em javascript do aplicativo desenvolvido durante o #NLW da Rocketset em Maio de 2020

[NWL Rocketseat](https://nextlevelweek.com/aulas/booster/1/edicao/1)

- create project (inside new empty folder, server)  
- npm init -y (create with default config)  
- npm install express (routes config)  
- npm install knex (database framework)  
- npm install sqlite3 (database)  
- npm install @types/express -D (development dependency) (express source)  
- npm install typescript -D (development dependency) (typescript support)  
- npm install ts-node -D (development dependency) (run typescript code)  
- npm install ts-node-dev -D (development dependency) (run typescript code without restart)  
- npm install cors  - npm install @types/cors  -D
- npx tsc --init (create typescript config)  
- create src folder inside server folder  
- open server folder on visual studio code

- run project  
- npx ts-node .\src\server.ts ; ou  
- npx ts-node-dev .\src\server.ts   ; ou
- npm run dev  
- open http://localhost:3333/users on browser

- create database  
- npx knex migrate:latest --knexfile knexfile.ts

