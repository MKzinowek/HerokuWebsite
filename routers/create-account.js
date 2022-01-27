const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/create-account', (req, res) => {
    const dir = path.join(__dirname,"../templates/create-account.hbs")
    res.render(dir)
})

module.exports = router