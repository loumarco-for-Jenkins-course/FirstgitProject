const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Hello From Node!!</h1>\n<h2>For feature Branch</h2>Pushing this change for Jenkins build'))

app.listen(port, () => console.log(`listening on port ${port}!`))