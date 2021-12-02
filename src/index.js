"use strict"

const express = require("express")
const config = require('config')

const threads = require('./routes/threads.js')
const posts = require('./routes/posts.js')
const login = require('./routes/login.js')
const search = require('./routes/search.js')
const users = require('./routes/users.js')
const messages = require('./routes/messages.js')
const cors = require('./middleware/cors.js')

const app = express()

app.use(express.json())

if (config.get('name') === 'forum-development')
    app.use(
        (req, res, next) => setTimeout(next, 1000 + Math.random() * 2000))

app.use(cors)

app.use('/api/threads', threads)

app.use('/api/posts', posts)

app.use('/api/login', login)

app.use('/api/search', search)

app.use('/api/users', users)

app.use('/api/messages', messages)


app.listen(config.get('port'), () => console.log("server working at " + config.get('port')))
