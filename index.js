const express = require("express");

const products = require("./products.json");
const categories = require("./categories.json");

const app = express();

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:category", (req, res) => {
  const category = req.params.category;

  const cat_product = products.products.filter(
    (product) => product.category == category
  );
  res.send(JSON.stringify(cat_product));
});

app.get("/product/:name", (req, res) => {
  const name = req.params.name;

  const cat_product = products.products.filter((product) =>
    product.title.toLowerCase().includes(name)
  );
  res.send(JSON.stringify(cat_product));
});

app.get("/top", (req, res) => {
  const top = products.products.filter(
    (product) => product.discountPercentage > 15
  );

  res.send(JSON.stringify(top));
});

app.listen(8080);
