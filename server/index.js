const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const next = require('next');
const {PORT} = require('./config/server.config')

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev: dev});
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({extended: false}))
    server.use(bodyParser.json({limit: 1000000000}))
    server.use(morgan('short'))

    // Hanle every request.
    server.get('*', (req, res) => {
      handle(req, res);
    })

    server.get('/', (req, res) => {
      app.render(req, res, '/')
    })

    server.get('/u/:id', (req, res) => {
      const actualPage = '/user';
      const queryParams = {id: req.param.id}
      app.render(req, res, actualPage, queryParams);
    })

    server.listen(PORT, err => {
      if(err) throw err;
      console.log(`listening at port ${PORT}`)
    })
  })
  .catch(ex => {
    console.log(ex.stack)
    process.exit(1)
  })