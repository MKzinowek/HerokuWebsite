const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/Assignment2', (req, res) => {
    const dir = path.join(__dirname,"../templates/Assignment2.html")
    res.sendFile(dir)
})

module.exports = router