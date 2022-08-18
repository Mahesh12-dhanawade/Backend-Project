// project123
// bo9wao1LbVyvcbFX
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const url = `mongodb+srv://project123:bo9wao1LbVyvcbFX@cluster0.xbmpand.mongodb.net/?retryWrites=true&w=majority`;
const cors = require('cors')
app.use(cors())
app.options("*", cors());


require('dotenv').config()


// Middleware
// app.use(express.json())
app.use(bodyParser.json())


//Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);


/** ============================================================== */
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "e-store-database",
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

/** ============================================================== */


  // model is collection in mongdb
// mongoose it is called schema


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})








