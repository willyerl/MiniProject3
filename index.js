const mongoose = require("mongoose");
var data = require('./routes/dataRoutes');
const express = require('express')
const app = express()
const port = 3000
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use('/api-docs',swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

let cors = require("cors")  //stops browser error (npm install cors)
app.use(cors())

app.use('/carbon',data)
app.use('/', express.static('public'))


mongoose.connect('mongodb://localhost:27017/carbon',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})





///What was your requirements gathering and design process? Was it useful/successful?
// Give a high level overview of your application and its features
// Where does the data come from (external API)?
// How is this data inserted into your database?
// How is the data structured (into tables or collections)?
// How is the application code structured (MVC model)?
// Does your application cover all 4 CRUD operations? How?
// How might using a database instead of an external API directly benefit an application?
// How might you extend the features of your application in future?