const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const queue = []

app.use(express.static('public'))

/**
 * Main Website
 */

/**
 * Handle Commands
 */
app.get('/push/:pin/:command', (req, res) => {
    if (req.params.pin ==  7949) {
        queue.push(req.params.command)
        res.send(queue)
    } else {
        res.send("Incorrect PIN")
    }
})

app.get('/get', (req, res) => {
    res.send(queue.shift())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})