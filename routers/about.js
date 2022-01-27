const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/About', (req, res) => {
    const dir = path.join(__dirname,"../templates/About.hbs")
    res.render(dir)
})

module.exports = router