const express = require('express');
const { loginRouter, userRouter } = require('./routes/index');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.use('/login', loginRouter);
app.use('/user', userRouter);

module.exports = app;
