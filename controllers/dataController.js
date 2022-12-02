var DBmiddleware = require('../services/dbService');
var DBhowmuch = require('../services/dbHowMuchService');


const controinsert = async (req, res) => {
    let result = await DBmiddleware.insert(req, res)

    res.status(200)
    res.json(result)
}

const controseeModels = async (req, res) => {
    let result = await DBmiddleware.seeModels(req.query.maker, res)

    res.status(200)
    res.json(result)
}

const controModels = async (req, res) => {
    let result = await DBmiddleware.models(req.query.maker, res)

    res.status(200)
    res.json(result)
}
const controspecificModels = async (req, res) => {
    let result = await DBmiddleware.specificModels(req.query.maker, req.query.model, res)

    res.status(200)
    res.json(result)
}

const controcleantable = async (req, res) => {
    let result = await DBmiddleware.cleantable(req, res)

    res.status(200)
    res.json(result)
}

const controdeleOne = async (req, res) => {
    let result = await DBmiddleware.deleOne(req.query.model, res)

    res.status(200)
    res.json(result)
}
// const controlWichCars = async (req, res) => {
//     let result = await DBmiddleware.WichCars(req.query.maker , req.query.model, res)
//     res.status(200)
//     res.json(result)
// }

const controMuchCObyCollection = async (req, res) => {
    let result = await DBhowmuch.MuchCObyCollection(req, res)

    res.status(200)
    res.json(result)
}

const controByChoiceCar = async (req, res) => {
    let result = await DBhowmuch.byChoiceCar(req.query.maker, req.query.model, res)

    res.status(200)
    res.json(result)
}

module.exports = { 
    controinsert, controModels, controcleantable,  
    controMuchCObyCollection , controByChoiceCar,
     controspecificModels, controseeModels, controdeleOne
    //  , controlWichCars 
}