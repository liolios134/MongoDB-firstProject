// Third party libraries
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();
//require monogoDB file
require("./config/db")

// require Controllers
const UsersController = require("./controllers/UsersController");

//Initialize express app
const app = express();
app.listen(process.env.PORT);

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//Routing System
app.get("/", (req, res) => {
    res.send("OK");
});

// Users Routes
app.get("/users" , UsersController.list );
app.get("/users/:userId" , UsersController.getOne );
app.post("/users", UsersController.create );
app.delete("/users/:userId" , UsersController.deleteUser );
app.put("/users/:userId" , UsersController.updateUser );

// Products Routes