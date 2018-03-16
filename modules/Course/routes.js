const express = require('express')
const router = express.Router()
const url = require('url')
const querystring = require('querystring')

const Controller = require('./controller')

/* GET Courses listing. */
router.get('/', (req, res, next) => {
  const url_parse = url.parse(req.url)
  const query = querystring.parse(url_parse.query)
  if (typeof query.name == "undefined") {
    Controller.find(req, res)
  }

  else {
    Controller.findByName(req, res, query)
  }
})

router.get('/:id', (req, res, next) =>
  Controller.findOne(req, res)
)

router.post('/', (req, res, next) =>
  Controller.create(req, res)
)

router.put('/:id', (req, res, next) =>
  Controller.update(req, res)
)

router.delete('/:id', (req, res, next) =>
  Controller.remove(req, res)
)

module.exports = router
