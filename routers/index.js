const express = require('express')
const path = require('path')

const router = express.Router()

router.get('', (req, res) => {
    const dir = path.join(__dirname,"../templates/index.hbs")
    res.render(dir)
})

module.exports = router
