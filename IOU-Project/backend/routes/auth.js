var db = require("../models");

module.exports = function (app, passport) {

    // logout of user account
    app.get('/logout', function(req, res) {
        req.session.destroy(function(err){
            req.logout();
            res.clearCookie('user_name');
            res.clearCookie('user_id');
            res.redirect('/');
        })
    });

    app.post('/auth/signup', function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
            console.log("info", info);
            if (err) {
                console.log("passport err", err);
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting authentication status
            if (! user) {
                console.log("user error", user);
                return res.send({ success : false, message : 'authentication failed' });
            }

            // ***********************************************************************
            // "Note that when using a custom callback, it becomes the application's
            // responsibility to establish a session (by calling req.login()) and send
            // a response."
            // Source: http://passportjs.org/docs
            // ***********************************************************************

            req.login(user, loginErr => {
                if (loginErr) {
                    console.log("loginerr", loginErr)
                    return next(loginErr);
                }
                //var userId = user.dataValues.id;
                console.log('redirecting....')
                res.cookie('user_id', user.id);


                return res.send({success: true});

            });
        })(req, res, next);
    });

    app.post('/auth/signin', function(req, res, next) {
        console.log("Authenticating logging in")
        passport.authenticate('local-login', function(err, user, info) {
            console.log("\n\n\n########userrrr", user)
            if (err) {
                console.log("passport err", err);
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting authentication status

            if (!user) {
                return res.send({ success : false, message : 'authentication failed'});
            }

            req.login(user, loginErr => {
                if (loginErr) {
                    console.log("loginerr", loginErr)
                    return next(loginErr);
                }
                //var userId = user.dataValues.id;
                console.log('redirecting....')
                res.cookie('user_id', user.id);


                return res.send({success: true});

            });
        })(req, res, next);
    });

};