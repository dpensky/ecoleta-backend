import express from 'express';

const app = express();

/*
* http://localhost:3333/users
*/
app.get('/users', (request, response) => {
    console.log('Listagem de Usuarios');
    // response.send('Hello World!');
    response.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Daniel'
    ]);
});

app.listen(3333);