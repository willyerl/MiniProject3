const mongoose = require("mongoose");

const carbonSchema = new mongoose.Schema({
    CO2: {
        type: String,
        required: true,
    },
    how_many_trees: {
        type: String,
        required: true,
    }
});



const carbon = mongoose.model("trees", carbonSchema);


module.exports = carbon;