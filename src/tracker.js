const express = require('express');

const EMPTY_GIF = new Buffer('R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64');
const EMPTY_GIF_LENGTH = EMPTY_GIF.length;

module.exports = function () {
  const router = express.Router();

  router.get('/:id.gif', (req, res) => {
    // add object to list of visits in tracking instance
    console.log({
      id: req.params.id,
      ip: req.ip,
      url: req.url,
      date: new Date(),
      headers: req.headers
    });

    res.type('gif');
    res.header('Content-Length', EMPTY_GIF_LENGTH);
    res.status(200);
    res.write(EMPTY_GIF);
    res.end();
  });

  router.post('/', (req, res) => {
    res.status(201).send('Create tracking with unique id');
  });

  router.get('/', (req, res) => {
    res.status(200).send('Return list of trackings');
  });

  router.get('/:id', (req, res) => {
    res.status(200).send('Return tracking json data by unique id');
  });

  router.delete('/:id', (req, res) => {
    res.status(204).send('Delete tracking by unique id');
  });

  return router;
};
