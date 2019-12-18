// Third party libraries
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();
//require monogoDB file
require("./config/db")

// require Controllers
const UsersController = require("./controllers/UsersController");
const ProductsController = require("./controllers/ProductsController");
const CategoriesController = require("./controllers/CategoriesController");

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
app.get("/products" , ProductsController.list );
app.get("/products/:productId" , ProductsController.getOne );
app.post("/products", ProductsController.create );
app.delete("/products/:productId" , ProductsController.deleteProduct );
app.put("/products/:productId" , ProductsController.updateProduct );
app.get("/products/category/:categoryId" , ProductsController.getCategoryProduct);

// Categories Routes
app.get("/categories" , CategoriesController.list );
app.get("/categories/:categoryId" , CategoriesController.getOne );
app.post("/categories", CategoriesController.create );
app.delete("/categories/:categoryId" , CategoriesController.deleteCategory );
app.put("/categories/:categoryId" , CategoriesController.updateCategory );