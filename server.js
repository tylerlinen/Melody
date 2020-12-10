require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const expressLayouts = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
const passport = require('passport')

const db = require ('./config/keys').MongoURI;

require('./config/passport')(passport);

mongoose.connect(db, {useNewUrlParser: true })
    .then(() => console.log('mongoDB Connected'))
    .catch(err => console.log(err))

//ejs
app.use( express.static( "public" ) );
app.use( express.static( "views" ) );
app.use( express.static( "/views/imgs" ) );

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}));

app.use(session({
    secret: '123',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;








// mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true })
// const db = mongoose.connection
// db.on("error", (error) => console.log(error));
// db.once("open", () => console.log("Connected To Database"));

// app.use(express.json())

// const melodyRouter = require("./routes/melodys")
// app.use("/melodys", melodyRouter)


app.listen(3000, () => console.log("Server Started"));
