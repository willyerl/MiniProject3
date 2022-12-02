const mongoose = require("mongoose");

const carbonSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    models: {
        type: String,
        required: true,
    }
});



const carbon = mongoose.model("modelscar", carbonSchema);


module.exports = carbon;