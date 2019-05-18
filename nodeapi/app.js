const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config()

//db connection
mongoose.connect(
	process.env.MONGO_URI,
	{useNewUrlParser: true}
)
.then(()=> console.log('DB Connected'))

mongoose.connection.on('error', err => {
	console.log(`DB connection error: ${err.message}`)
});




// bring in routes
const postRoutes = require("./routes/post")


// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`A Node JS API is listening on port: ${port}`)
});