
const express = require('express')
const cors = require('cors')
const db = require("./db/mongoConfig");

const app = express()
const apiPort = 3000

const stocksRoute = require("./routes/stocksRoute");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors())

app.use ("/stocks", stocksRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))