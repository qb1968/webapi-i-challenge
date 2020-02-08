// implement your API here
// require the express npm module, needs to be added to the project using "yarn add" or "npm install"
// 
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/hobbits', (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    },
  ];

  res.status(200).json(hobbits);
});

server.listen(8000, () => console.log('API running on port 8000'));