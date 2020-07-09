const {PhoneBook} = require('../models')
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
}).single('contactImage')

class PhoneBookController {

    static getContacts(req,res,next) {
        PhoneBook.findAll({
            order: [
                ["name", 'ASC']
            ]
        })
        .then(contacts=>{
            res.status(200).json({contacts})
        })
        .catch(next)
    }

    static async createContact(req,res,next) {
        const {name,address,phone,email} = req.body
        PhoneBook.create({
            name,
            address,
            phone,
            email,
            image : './uploads/default.jpg'
        })
        .then(contact=>{
            res.status(201).json({contact})
        })
        .catch(next)
    }

    static getContact(req,res,next) {
        PhoneBook.findByPk(req.params.id)
        .then(contact=>{
            res.status(200).json({contact})
        })
        .catch(next)
    }

    static updateContact(req,res,next) {
        const {name,address,phone,email,image} = req.body
        PhoneBook.update({
            name,
            address,
            phone,
            email,
            image
        },{where: {id: req.params.id}})
        .then(contact=>{
            return PhoneBook.findByPk(req.params.id)
        })
        .then(updated=>{
            res.status(200).json(updated)
        })
        .catch(next)
    }

    static destroyContact(req,res,next) {
        PhoneBook.findByPk(req.params.id)
        .then(deleted=>{
            return PhoneBook.destroy({where: {id: deleted.id}})
        })
        .then(result=>{
            res.status(200).json({message:'Contact has been deleted'})
        })
        .catch(next)
    }

    uploadImage(req,res,next) {
        // let image = `uploads/${req.file.filename}`

        // PhoneBook.update({ 
        //     image 
        // },{
        //     where: {
        //         id: req.params.id
        //     }
        // })
        // .then(()=>res.status(200).json({message:'upload photo success'}))
        // .catch(next)
        upload(req, res, (err) => {
            if (err) res.send(err)
            else {
                let image = `uploads/${req.file.filename}`
                PhoneBook.update({ image }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(() => {
                    res.status(200).json({message:'upload photo success'})
                })
                .catch(next)
            }
        })
    }
    
}

module.exports = PhoneBookController