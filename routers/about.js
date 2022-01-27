const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/About', (req, res) => {
    const dir = path.join(__dirname,"../templates/About.html")
    res.sendFile(dir)
})

module.exports = router