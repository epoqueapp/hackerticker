/**
 * Created by maximilianalexander on 5/13/15.
 */

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../data/User');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var callbackUrl = process.env.NODE_ENV == "prod" ? "http://www.hackerticker.com/auth/twitter/callback" : "http://127.0.0.1:3000/auth/twitter/callback";
var TWITTER_CONSUMER_KEY = process.env.NODE_ENV == "prod" ? "Q3URyMneq4swr47v5Xs5pQU8e" : "SiRnNpKyTMu5g2d0064nN9jZ3";
var TWITTER_CONSUMER_SECRET = process.env.NODE_ENV == "prod" ? "P6JAgcsRCETyQqeZSb8cIxXIumz5A2pFLLmuKv4C9ajqmmC8DG" : "FRk0jtWOcBn7T44xboeFFDcvhobOrdg9IwhLfV6yEz4VE3l8Fl";


module.exports = function (app) {

    app.use(session({ secret: 'keyboard cat', cookie: { secure: true }}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(cookieParser());


    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });

    passport.use(new TwitterStrategy({
            consumerKey: TWITTER_CONSUMER_KEY,
            consumerSecret: TWITTER_CONSUMER_SECRET,
            callbackURL: callbackUrl
        },
        function (token, tokenSecret, profile, done) {
            User.findOneAndUpdateAsync({
                    twitterId: profile.id
                },
                {
                    $set: {
                        twitterId: profile.id,
                        name: profile.name
                    }
                },
                {upsert: true}).then(function(user){
                    done(null, user);
                })
                .catch(function(err){
                    if(err) { throw err; }
                });
        }
    ));
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/',
            failureRedirect: '/login'
        }));
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
};