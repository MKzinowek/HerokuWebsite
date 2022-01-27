const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/Contact', (req, res) => {
    const dir = path.join(__dirname,"../templates/Contact.html")
    res.sendFile(dir)
})

module.exports = router