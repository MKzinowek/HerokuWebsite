const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/tasksPage', (req, res) => {
    const dir = path.join(__dirname,"../templates/tasksPage.hbs")
    res.render(dir)
})

module.exports = router