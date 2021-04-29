const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//fetching data from mongoosedb if link is /
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

//entering data into mongoosedb if link is /add
router.route('/add').post((req, res) => {
    //retriving values from previous page
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json('Exercise Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
        
});

//finding a specific exercise
router.route('/:id').get((req, res) => {
    //retriving data(id) from url parameter
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

//finding a specific exercise and deleting it
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//finding and updating a specific exercise
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

        exercise.save()
            .then(() => res.json('Exercise Updated'))
            .catch(err => res.status(400).json('Error: ' + err));    
        })
        .catch(err => res.status(400).json('Error: '+ err));
});
  
module.exports = router;