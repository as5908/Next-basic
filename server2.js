const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // server.get('/p/:id/:dog', (req, res)
  server.get('/p/:id', (req, res) => {
    // app.render(req, res, '/post', { id: 9 });
    // app.render(req, res, '/post', { id: req.params.id, color: 'red' });
    app.render(req, res, '/post', req.params);
  });

  server.get('/lol', (req, res) => {
    res.send('You have hit lol'); //This will not involve next js
  });

  //handle every other request to nextJs
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('>Now serving on localhost:3000');
  });
});
