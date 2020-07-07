const route = require('express').Router()
const Controller = require('../controllers/phoneBook')

route.get('/', Controller.getContacts)
route.post('/', Controller.createContact)
route.get('/:id', Controller.getContact)
route.put('/:id',Controller.updateContact)
route.delete('/:id',Controller.destroyContact)

module.exports = route