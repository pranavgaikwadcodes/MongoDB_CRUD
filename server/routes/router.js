const express = require('express');
const route = express.Router() 

const services = require('../services/render')

const controller = require('../controller/controller')

// for admin
var AdminDB = require('../model/admin')
const axios = require('axios');

// login  
route.get('/', services.Login);


// API

route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);


// for extras
route.get('/dashboard', services.dashboard);
route.get('/api/dashboard',controller.find);

// delete
route.delete('/api/dashboard/:id',controller.delete);

// profile
route.get('/profile', services.profile)
route.get('/api/profile',controller.findAdmin);
route.put('/api/profile/:id',controller.updateProfile);

// add user
route.post('/api/users',controller.create);
route.get('/addUser', services.addUser)

// update user
route.get('/updateUser', services.updateUser)
route.put('/api/users/:id',controller.update);


route.post('/', async (req,res) => {
    try {

        const user = req.body.username
        const pass = req.body.password

        // console.log(`username is ${user} password is ${pass}`)
        const userName= await AdminDB.findOne({username:user});
        
        // res.send(userName.password);
        // console.log(userName)

        if(userName.password === pass){
            res.status(200)

                axios.get('http://localhost:3000/api/dashboard')
                .then(function(response){
                    
                    res.render('App/dashboard', { users : response.data });
                })
                .catch(err =>{
                    res.send(err);
                })
                
        }
        else{
            res.send('Invalid Password')
        }
        
    } catch (error) {
        res.status(500).send('Invalid User')
    }
});

module.exports = route