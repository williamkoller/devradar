const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-1cbkb.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,

});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST PUT E DELETE

// Tipos de parâmetros:

// Query Params: request.query(Filtros, ordenação, paginação...)

app.get('/', (request, response) => {
  console.log(request.query);
  return response.json({ message: "Hello GET used request.query"})
});


// Route Params: request.params(Identifica um recurso na alteração ou remoção)

app.put('/users/:id', (request, response) => {
  console.log(request.query)
  return response.json({ message: 'Hello OmniStack 11' });
});

// Body: request.body(Dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: "Hello POST used request.body"})
});

// http://localhost:3333

app.listen(3333);

// MongoDB (Não-Relacional)



