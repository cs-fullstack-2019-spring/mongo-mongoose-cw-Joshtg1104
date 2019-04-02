var express = require('express');
var router = express.Router();
const ZooAnimal = require('../models/zooanimals')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
/*Allows user to add an animal to the array*/
router.get('/animal/add/:id/:type/:description', (req, res) => {
    animalData = {
        animal_id: req.params.id,
        animal_type: req.params.type,
        animal_description: req.params.description,
    };
    ZooAnimal.create(animalData, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
        }
    });
    res.send("Info has been Registered.")
});
/*Allows user to find animal entry based on id*/
router.get('/animal/get/:id', (req, res) => {
    ZooAnimal.find({animal_id: req.params.id}, (error, results) => {
        if (error) {
            res.send(error)
        } else {
            res.send(results)
        }
    });
});
/*Is suppose to update an entry but i can't quite figure it out*/
router.get('/animal/update/:id/:type/:description', (req, res) => {
    // KEY: You just needed to look up the animal first before updating with the data received in the request
   ZooAnimal.updateOne({animal_type: req.params.type}, {animal_description: req.params.description}, (error, results) => {
       if(error){
           res.send(error)
       }
       else{
           res.send(results)
       }
    });
});

/*Allows the user to delete an animal entry*/
router.get('/animal/del/:id', (req, res) => {
    ZooAnimal.deleteOne({animal_id: req.params.id}, (error) => {
        if(error){
            console.log(error)
        }
    });
    res.send("An Entry was Deleted.")
});

module.exports = router;
