require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      authCtrl = require('./controllers/authCtrl'),
      ctrl = require('./controllers/mainCtrl'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT;

const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db);
    console.log('DB connected');
    app.listen(port, () => console.log(`Server is listening on port: ${port}`))
})

//auth endpoints
app.post(`/api/register`, authCtrl.register);
app.post('/api/login', authCtrl.login);
app.get('/api/logout', authCtrl);