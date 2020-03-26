const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //quando for para produção, colocar o dominio em origin
app.use(express.json());
app.use(routes);


app.listen(3333);