const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors");
const mysql = require('mysql2');
const { error } = require("jquery");

const db = mysql.createPool({
  host:"localhost",
  user:'root',
  password:'root',
  database:'smartvendor'
})

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/api/vendor", (req, res) => {
  const sqlGet = "select * from items" ;
  db.query(sqlGet,(error, result) =>{
    res.send(result);
  })
});
app.post("/api/vendor", (req, res) => {
  const { product_name, product_cost, product_info, product_image } = req.body;
  const sqlPost = "INSERT INTO items (product_name, product_cost, product_info, product_image) VALUES ()";
  db.query(sqlPost, [name, price], (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(`Item added with ID: ${result.insertId}`);
    }
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
