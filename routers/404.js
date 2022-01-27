const express = require('express')
const path = require('path')

const router = express.Router()

router.get('*', (req, res) => {
    const dir = path.join(__dirname,"../templates/404.hbs")
    res.render(dir)
})

module.exports = router