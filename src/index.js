const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, CD3!' });
});

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;