const express = require('express')
const connectDB = require('./config/db')
// khoi dong app
const app = express()

// khoi dong express middleware
app.use(express.json())

// app.get('/', (req, res) => res.send("hello word"));

// ket noi csdl
connectDB();

const port = 5000;
app.listen(port, () => console.log(`server khoi dong tai port tai ${port}`));

