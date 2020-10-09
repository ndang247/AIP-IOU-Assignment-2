// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var db  = require('../models');

// expose this function to our app using module.exports
module.exports = function(passport) {
    // console.log("passport loading");

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // SERIALIZE
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // deserialize
    passport.deserializeUser(function(id, done) {
        db.User.findByPk(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    passport.use('local-signup', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            /*process.nextTick(function() {
                db.User.findOne({
                    where: {
                        email: req.body.email
                    }
                }).then(function(user, err){
                    if(err) {
                        console.log("err",err)
                        return done(err);
                    }
                    // check to see if theres already a user with that email
                    if (user) {
                        console.log('signupMessage', 'That email is already taken.');
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        // console.log("creating");

                        db.User.create({
                            email: req.body.email,
                            fullname:req.body.fullname,
                            password: db.User.generateHash(req.body.password)

                        }).then(function(dbUser) {
                            //console.log("created result: ", dbUser);
                            // send post back to render
                            console.log("User Created")
                            return done(null, dbUser);

                        }).catch(function (err) {
                            // handle error;
                            console.log(err);
                        });
                    }
                });
            });
            */
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {

                    var data =
                        {
                            email: email,
                            password: db.User.generateHash(password),
                            fullname: req.body.fullname
                        };
                    db.User.create(data)
                        .then(function(newUser, created) {
                            if (!newUser) {
                                console.log('Cannot create user.')
                                return done(null, false);
                            }

                            if (newUser) {
                                console.log('New User created')
                                return done(null, newUser);
                            }
                    });

                }

            });
        }));

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(function(user, err) {
                // if no user is found, return the message
                if (!user){
                    console.log("no user found");
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (user && !user.validPassword(password)){
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
                }

                // all is well, return successful user
                return done(null, user);
            });
        }));
};