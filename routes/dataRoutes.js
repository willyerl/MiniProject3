var express = require('express');

var data = require('../controllers/dataController.js')
var router = express.Router();


router.get('/insert', (req, res) => {       // calling the controller for populate the DB//v
    data.controinsert(req, res)
})

router.get('/seeModels', (req, res) => {
    data.controseeModels(req,res)
})

router.post('/models', (req, res) => {       //choice a maker and populate with the models//v
    data.controModels(req,res)
})

router.post('/specificModels', (req, res) => {       //choice a maker and populate with a specific model//v
    data.controspecificModels(req,res)
})

router.delete('/clean', (req, res) => {       //drop the collection //v
    data.controcleantable(req,res)
})

router.delete('/deletOne', (req, res) => {  
    data.controdeleOne  (req, res) 
})

// router.post('/wichCars', (req, res) => {     //buiding a tabel for use then to calculate the CO2//v
//     data.controlWichCars(req, res)
// })

router.get('/howMuch', (req, res) => {      //calculate the CO2 all cars on the tabel, and add at the data base how many trees are necesserie//v
    data.controMuchCObyCollection(req, res)
})

router.get('/byChoice',(req, res) => {      //calculate the CO2 a specific cars//v
    data.controByChoiceCar(req, res)
})


module.exports = router;



