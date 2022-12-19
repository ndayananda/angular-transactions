# Transactions - Angular Application 
A web application to list all the transaction group by Date and show the transaction details on click of each transaction

## Stack
- Angular (https://angular.io/)
- Tailwind CSS (https://tailwindcss.com/)
- Cypress (https://www.cypress.io/)

## Run Application

### Pre setup - Run backend server
- 
- Run npm install ```npm install``` from server folder
- Running the server you need to run:
    - Mac: ```npm run start:mac```
    - Windows: ```npm run start:windows```

> - This command will run the typescript compiler
> - Copies the transaction.json file to the dist folder
> - Run the express service on port `8080`

### Run frontend application
- Run ```npm install``` from client folder
- Run ```npm start```
- Run cypress e2e using ```npm run e2e```