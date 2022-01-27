const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/Assignment1', (req, res) => {
    const dir = path.join(__dirname,"../templates/Assignment1.html")
    res.sendFile(dir)
})

module.exports = router