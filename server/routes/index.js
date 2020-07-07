const route = require('express').Router()
const phoneBook = require('./phoneBook')
const { errorHandler } = require('../middlewares/errorHandler')

route.use('/books', phoneBook)
route.use(errorHandler)

module.exports = route