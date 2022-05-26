const express = require('express')
const exphbs = require('express-handlebars')
const app = express();
const port = 3000
const hostname = '127.0.0.3'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars)
const expressHandlebars = require('express-handlebars');
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const flash = require('connect-flash');

mongoose.connect('mongodb://localhost/project_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mongoStore = connectMongo(expressSession)


app.use(express.static('public'))

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use(expressSession({
    secret: 'testtt',
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(flash());
app.use((req, res, next)=> {
  res.locals.flashMessages = req.flash();
  next();
})


app.use((req, res, next) => {
    const { userId } = req.session
    if (userId) {
        res.locals = {
            displayLink: true
        }
    }
    else {
        res.locals = {
            displayLink: false
        }
    }
    next()
})

const main = require('./routes/main')
app.use('/', main)

const posts = require('./routes/posts')
app.use('/posts', posts)

const users = require('./routes/users')
app.use('/users', users)

const contacts = require('./routes/contacts')
app.use('/contacts', contacts)


app.listen(port, hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}/`)

})