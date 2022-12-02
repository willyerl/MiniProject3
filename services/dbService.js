var dataMiddleware = require('../middleware/middlewareMakerCars.js');
const carbonCarModel = require('../models/modelscars.js')
const MongoClient = require("mongodb");

async function insert(req, res) {
    let APIres = await dataMiddleware.allvehicle()
    let all = APIres.data
    let cars = []
    for (let i in all) {
        cars.push(all[i].make)
    }
    return cars
}

async function seeModels(brand, res) {
    let APIres = await dataMiddleware.allModels(brand)
    let data = APIres.data
    return data
}

async function models(brand, res) {
    let APIres = await dataMiddleware.allModels(brand)
    let all = APIres.data
    let data = []
    let mark = brand
    for (let i in all) {
        await data.push(mark, all[i])
        carbonCarModel.insertMany([{
            make: mark,
            models: all[i].model
        }
        ]).then(function () {
            console.log("Data inserted")  // Success
        }).catch(function (error) {
            console.log(error)      // Failure
        });
    }
    res.json(data)

}

async function specificModels(maker, model, res) {
    carbonCarModel.create([{
        make: maker,
        models: model
    }
    ]).then(function () {
        console.log("Data inserted")  // Success
    }).catch(function (error) {
        console.log(error)      // Failure
    });
}


async function cleantable(req, res) {
    carbonCarModel.deleteMany().then(function () {
        console.log("Data deleted"); // Success
    }).catch(function (error) {
        console.log(error); // Failure
    });
}

async function deleOne(req, res) {
    let one = {models : req}
    await carbonCarModel.deleteOne(one).then(function () {
        console.log("Data deleted"); // Success
    }).catch(function (error) {
        console.log(error); // Failure
    });
}

// async function WichCars(maker, model, res) {

//     carbonCarModel.create([{
//         make: maker,
//         models: model
//     }
//     ]).then(function () {
//         console.log("Data inserted")  // Success
//     }).catch(function (error) {
//         console.log(error)      // Failure
//     });
// }


module.exports = {
    insert, models, cleantable,
     specificModels, seeModels,
    deleOne
    // WichCars,
}


