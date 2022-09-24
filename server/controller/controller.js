var Userdb = require('../model/model')

// create and save new user
exports.create = (req,res) => {

    // validate request
    if(!req.body){
        res.status(400).send({message: " Content cannto be empty!"})
        return
    }

    // new user 
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        course: req.body.course,
        courseYear: req.body.courseYear,
        seatNumber: req.body.seatNumber,
        gender: req.body.gender,
    })

    //save user in database
    user
        .save(user)
        .then(data => {
            res.redirect('/add-user')
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || 'Some error occurred'
            })
        })

}

// retrive/return a single/all user
exports.find = (req,res) => {

    if(req.query.id){
        const id = req.query.id

        Userdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404)
                        .send({
                            message: `No record found with ${id}`
                        })
                }
                else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500)
                    .send({
                        message: err.message | "Error occured while fetching record."
                    })
            })
    }
    else{
        Userdb.find()
        .then(user => {
            res.send(user);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || 'Some error occurred'
            })
        })
    }
    
}

// Update a new identified user by id
exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({
                message: 'Data to be updated cannot be empty'
            })
    }

    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data =>{
            if(!data){
                res.status(404)
                    .send({message: `Cannot update user with ${id}.`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500)
                .send({
                    message: err.message | 'Some error occurred'
                })
        })
}

// Delete a user with specified user id
exports.delete = (req,res) => {

    const id = req.params.id
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404)
                    .send({
                        message: 'Cannot delete with this id'
                    })
            }
            else{
                res.send({
                    message: 'User was deleted'
                })
            }
        })
        .catch(err => {
            res.status(500)
                .send({
                    message: err.message | 'Error occoured while deleting the user'
                })
        })

}