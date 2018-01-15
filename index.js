const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const address = require('network-address');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3030;

const EMPTY_GIF = new Buffer('R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64');
const EMPTY_GIF_LENGTH = EMPTY_GIF.length;

const app = express();

if ('development' === env) {
  app.use(logger('dev'));
}

app.use(cors());

app.use('/ping', (req, res) => res.send('pong ^.^'));
app.use('/track.gif', (req, res) => {
  console.log({
    ip: req.ip,
    url: req.url,
    date: new Date(),
    headers: req.headers
  });

  res.type('gif');
  res.header('Content-Length', EMPTY_GIF_LENGTH)
  res.status(200);
  res.write(EMPTY_GIF);
  res.end();
});

app.listen(port, () => {
  console.log(`api listening on http://${address()}:${port} env=${env}`);
});
