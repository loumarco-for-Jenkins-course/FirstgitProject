const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Hello From Node!!</h1>\n<h2>Email notification</h2>\nPushing this change for Jenkins auto build'))

app.listen(port, () => console.log(`A Change for lab chapter 3 ${port}!`))