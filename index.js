require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT
const mongoose = require('mongoose')
const mongoDB = process.env.MONGO_DATABASE

app.use(cors())

app.use(morgan(process.env.MORGAN_LOGGING))
app.use(express.json())

const todoRoutes = require('./routes/todo')
app.use('/todo', todoRoutes)
const userRoutes = require('./routes/user')
app.use('/user', userRoutes)

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.get('/', (req, res) => {
	res.send(`Hive Mind API`)
})

app.listen(port, () => {
	console.log(`Hive Mind API running on port ${port}`)
})
