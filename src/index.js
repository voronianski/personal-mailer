const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const compression = require('compression');
const { port, env, mongodb } = require('c0nfig');

const tracker = require('./tracker');
const sender = require('./sender');

const app = express();

if ('development' === env) {
  app.use(logger('dev'));
}

app.disable('x-powered-by');
app.use(cors());
app.use(compression());

app.use('/ping', (req, res) => res.send('pong ^.^'));
app.use('/t', tracker());
app.use('/s', sender());

app.listen(port, () => {
  console.log(`api is listening on http://localhost:${port} env=${env} db=${mongodb.connection}`);
});
