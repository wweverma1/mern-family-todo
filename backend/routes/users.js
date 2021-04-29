const router = require('express').Router();
let User = require('../models/user.model');

//fetching data from mongoosedb if link is /
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//entering data into mongoosedb if link is /add
router.route('/add').post((req, res) => {
    //retriving values from previous page
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
        
});

module.exports = router;