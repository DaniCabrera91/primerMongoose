const Product = require('../models/Product')

const ProductController = {

 async create(req, res) {
   try {
     const product = await Product.create(req.body)
     res.status(201).send({message: 'producto creado con éxito', product})
   } catch (error) {
     console.error(error)
     res
       .status(500)
       .send({ message: 'Ha habido un problema al crear el producto' })
   }
 },
 
 async getAll(req, res) {
    try {
      const products = await Product.find()
      res.status(200).send(products)
    } catch (error) {
      console.error(error)
    }
  },

  async getById(req, res) {
    try {
      const product = await Product.findById(req.params._id)
      res.status(200).send(product)
    } catch (error) {
      console.error(error)
    }
  },
 
  async getProductsByName(req, res) {
    try {
      if (req.params.name.length > 20) {
        return res.status(400).send('Búsqueda demasiado larga')
      }
      const name = new RegExp(req.params.name, 'i')
      const products = await Product.find({
        $text: {
          $search: req.params.name,
        },
      })
      res.send(products)
    } catch (error) {
      console.log(error)
    }
  },

  async delete(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params._id)
      res.send({ product, message: 'producto eliminado con éxito' })
    } catch (error) {
      console.error(error)
      res.status(500).send({
          message: 'Ha habido algún problema para eliminar el producto',
        })
    }
  },
 
  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      )
      res.send({ message: 'product successfully updated', product })
    } catch (error) {
      console.error(error)
    }
  },
 
 
 }
module.exports = ProductController