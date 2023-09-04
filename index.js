const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  });
})

app.get('/categories', (req, res) => {
  res.json({
    Title: 'El quixiote',
    Author: 'Miguel Cervantino',
    Genre: 'classic novel',
  });
})

app.get('/home', (req, res) => {
  res.json({
    lastName: 'Davis',
    firstName: 'Sarah'
  });
})

app.listen(port, () => {
  console.log('Mi port' + port);
});
