const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Hello From Node!!</h1>\n<h2>For feature Branch</h2>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))