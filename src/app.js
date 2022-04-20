const express = require('express') 
const path = require('path') 
const hbs = require('hbs')

const indexRouter = require('../routers/index') 
const loginRouter = require('../routers/login')
const mainRouter = require('../routers/main')
const createRouter = require('../routers/create-account')
const assignment1 = require('../routers/assignment1')
const assignment2 = require('../routers/assignment2')
const assignmentPage = require('../routers/assignmentPage')
const about = require('../routers/about')
const contact = require('../routers/contact')
const image = require('../routers/imagepage')
const tasksPage = require('../routers/tasksPage')
const _404Router = require('../routers/404')

const app = express() 

const dir = path.join(__dirname, "../public") 
app.use(express.static(dir))

app.set('view engine', 'hbs')

const viewsPath = path.join(__dirname, "../templates")
app.set('views', viewsPath)

const partialsPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialsPath)

app.use(indexRouter) 
app.use(loginRouter)
app.use(mainRouter)
app.use(createRouter)
app.use(assignment1)
app.use(assignment2)
app.use(assignmentPage)
app.use(about)
app.use(contact)
app.use(image)
app.use(tasksPage)

app.use(_404Router)


const port = process.env.PORT || 3000 
app.listen(port, () => { 
    console.log('Server is up on port ' + port) 
})