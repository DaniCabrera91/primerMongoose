const express = require('express')
const app = express()
const PORT = 3001
const { dbConnection } = require('./Config/config')

app.use(express.json())
app.use('/products', require('./routes/products'))
app.use('/users', require('./routes/users'))
app.use('/orders', require('./routes/orders'))


dbConnection()
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))