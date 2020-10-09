var db = require("../models");

module.exports = function (app, passport) {

    app.get('/signup', function(req, res){
        console.log("testing");
        res.render('signup', {layout: false});
    })



    app.post('/auth/signup', function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('/login?info=' + info);
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                res.cookie('user_id', user.id);
                res.cookie('user_name', user.fullname );
                return res.redirect('http://localhost:3000/leaderboard');
            });
        })(req, res, next);
    });

    app.get('/signin', function(req, res){
        res.render('signin', {layout: false});
    })

    app.post('/auth/signin', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
            console.log("\n\n\n########userrrr", user)
            if (err) {
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting authentication status
            console.log(user)
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
                res.cookie('user_name', user.fullname );

                return res.redirect('http://localhost:3000/leaderboard');

            });
        })(req, res, next);
    });

    // LOGOUT
    app.get('/auth/logout', function(req, res) {
        req.session.destroy(function(err){
            req.logout();
            res.clearCookie('user_name');
            res.clearCookie('user_id');
            res.redirect('/');
        })
    });
    // when login is successful, retrieve user info
    app.get("/auth/login/success", (req, res) => {
        console.log("hello")
        if (req.user) {
            res.json({
                success: true,
                message: "user has successfully authenticated",
                user: req.user,
                cookies: req.cookies
            });
        }
    });

    // when login failed, send failed msg
    app.get("/auth/login/failed", (req, res) => {
        res.status(401).json({
            success: false,
            message: "user failed to authenticate."
        });
    });
}