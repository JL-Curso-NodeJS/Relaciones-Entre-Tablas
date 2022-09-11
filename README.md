# Estructura Básica de un proyecto con NodeJS utilizando Express - PARTE 2

Este repositorio contiene la estructura de un proyecto, con rutas y base de datos PostrgreSQL utilizando Sequelize.

## Archivo .env en la raiz del proyecto
Crear un archivo llamado .env con los siguientes datos:

    PORT = 8000
    ENVIRONMENT = development
    DB_NAME= mi_bd
    DB_USERNAME = postgres
    DB_PASSWORD = password
    

## Para ejecutar el proyecto
    
    npm install
    npm run db:create
    npm start

## Dependencias utilizadas en el proyecto (extras a la PARTE 1)

- [Sequelize](https://sequelize.org/)
- [Sequelize-CLI](https://sequelize.org/cli/)
- [pg](https://node-postgres.com/)

## Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21047550-3430575e-9b39-499d-b47c-a218ca66557f?action=collection%2Ffork&collection-url=entityId%3D21047550-3430575e-9b39-499d-b47c-a218ca66557f%26entityType%3Dcollection%26workspaceId%3D1f4f77c5-eb75-4ee8-99d0-fbd51cc092df#?env%5BLOCALHOST%20BASE%5D=W3sia2V5IjoiVVJMIiwidmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJlbmFibGVkIjp0cnVlfV0=)

---

## Más información
Te dejo el link a un video explicando el funcionamiento de este proyecto: https://youtu.be/0sUa5A80bbg
