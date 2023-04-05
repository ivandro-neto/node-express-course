const express = require('express')
const path = require('path')
const connetDB = require("./database/connection.database")

//Routes
const tasks = require('./routes/tasks.route')

//Middlewares
const logger = require('./middleware/logger.middleware')
const notFound = require('./middleware/not-found.middleware')
const errorHandler = require('./middleware/error-handler.middleware')

//.ENV config
const dotenv = require('dotenv')
dotenv.config()
const _URI = process.env.MONGODB_URI
const port = process.env.PORT || 5000

// consts
const app = express()
const filename = './public/index.html'


//Middlewares
app.use(express.static('./public'))
app.use(express.json())
app.use(logger)

app.use(tasks.address, tasks.router)

//Error middlewares
app.use(notFound)
app.use(errorHandler)

const start = async () => {
    try {
        await connetDB(_URI)
        app.listen(port, ()=> console.log(`Serving on ${port}`))
    } catch (error) {
        console.error(error)
    }
}

start()


/*ROUTES FOR THIS APP

        app.get /api/v1/tasks - get all tasks
        app.post /api/v1/tasks - create a new task
        app.get /api/v1/tasks/:id - get a especific task
        app.patch /api/v1/tasks/:id - update a task data
        app.delete /api/v1/tasks/:id - delete a task
 */