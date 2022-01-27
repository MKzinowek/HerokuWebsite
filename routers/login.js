const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/login', (req, res) => {
    const dir = path.join(__dirname,"../templates/login.hbs")
    res.render(dir)
})

module.exports = router