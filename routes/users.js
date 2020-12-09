var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var passport = require('passport')

var User = require('../models/User');
var { Strategy } = require('passport');


//login
router.get('/login', (req, res) => res.render('Login'));


//registration
router.get('/register', (req, res) => res.render('Register'));

router.post('/register', (req,res) => {
    var { name, email, password} = req.body;
    let errors = [];

    if(!name || !email || !password) {
        errors.push({ msg: 'Please fill in all the feilds'});
    }
    if (email.includes("@")==false){
        errors.push({ msg: 'Must be a valid email'})
    }
    if(password.length < 8) {
        errors.push({ msg: 'Password Must Contain 8 Characters'});
    }
    if(errors.length > 0) {
        res.render('register',{
            errors,
            name,
            password,
        });
    } 
    else{
        User.findOne({ email: email})
        .then(user => {
            if(user) {
                errors.push({msg: 'Email is already registered'});
                res.render('register', {
                    errors,
                    name,
                    password
                });
            } else {
                var newUser = new User({
                    name,
                    email,
                    password
                });

                bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) =>{
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => {
                        req.flash('success_msg', "You are registered")
                        res.redirect('/login')
                    })
                    .catch(err => console.log(err));
                }))

            }
        });
    }

});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;


