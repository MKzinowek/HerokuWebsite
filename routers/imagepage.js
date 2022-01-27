const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/imagepage', (req, res) => {
    const dir = path.join(__dirname,"../templates/imagepage.hbs")
    res.render(dir)
})

module.exports = router