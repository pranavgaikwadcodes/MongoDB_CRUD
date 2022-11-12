const axios = require('axios');


exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req,res) => {
    axios.get('http://localhost:3000/api/users',{params: { id : req.query.id} })
        .then(function(Userdata) {
            res.render("update_user",{user :Userdata.data})
        })
        .catch(err => {
            res.send(err)
        })
}


// extras

exports.dashboard = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/dashboard')
        .then(function(response){
            res.render('App/dashboard', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

}

// profile page
exports.profile = (req,res) => {
    axios.get('http://localhost:3000/api/profile',{params: { id : req.query.id} })
        .then(function(Userdata) {
            res.render("App/profile",{user :Userdata.data})
        })
        .catch(err => {
            res.send(err)
        })
}


exports.addUser = (req, res) =>{
    res.render('App/addUser');
}



exports.updateUser = (req,res) => {
    axios.get('http://localhost:3000/api/users',{params: { id : req.query.id} })
        .then(function(Userdata) {
            res.render("App/updateUser",{user :Userdata.data})
        })
        .catch(err => {
            res.send(err)
        })
}

exports.Login = (req, res) => {
    // Make a get request to /api/users
    // axios.get('http://localhost:3000/api/users')
    //     .then(function(response){
    //         res.render('index', { users : response.data });
    //     })
    //     .catch(err =>{
    //         res.send(err);
    //     })

    res.render('index');
}