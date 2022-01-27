const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/assignmentPage', (req, res) => {
    const dir = path.join(__dirname,"../templates/assignmentPage.html")
    res.sendFile(dir)
})

module.exports = router