const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/Contact', (req, res) => {
    const dir = path.join(__dirname,"../templates/Contact.hbs")
    res.render(dir)
})

module.exports = router