const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3333;
const connectToDB = require('./database/connection');

const validUser = require('./models/User');

connectToDB();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});