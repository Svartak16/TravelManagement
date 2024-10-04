<<<<<<< HEAD
// Importing necessary modules
let express = require('express');
let port = 7000;
let app = express();
let db = require('./config/database').db;
const index = require('./routes/index');
const add = require('./routes/adduser');
const { engine } = require('express-handlebars');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Setting up Handlebars as the view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Serving static files from the 'public' directory
app.use(express.static(__dirname + "/public"));

// Route configuration
app.use("/", index);   // Home route
app.use("/adduser", add);  // Route to handle user addition

// Starting the server
app.listen(port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Server started on ${port}');
    }
=======
const express = require('express');
const dotenv = require('dotenv')
const index = require('./routes/index');
const add = require('./routes/adduser');
const hbs = require('handlebars');
const { handlebars } = require('hbs');
const {engine} = require('express-handlebars');

dotenv.config({
    path: "./.env",
});

const db = require('./config/database').db;


const app = express();
app.engine('handlebars', engine());
app.set('view engine','handlebars');
app.set('views','./views');
app.use(express.static(__dirname + "/public"));


app.use("/",index);
app.use("/adduser",add);


const port = process.env.PORT || 7000

app.listen(port,(err)=>{
    if(err) 

        throw err
    else
    console.log(`server started on ${port}`);
>>>>>>> 357b88cbc2cdf7c84a1f30ffac10e4502a161cc3
});