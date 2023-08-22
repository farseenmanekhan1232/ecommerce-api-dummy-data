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

app.get("/:category", (req, res) => {
  const category = req.params.category;
  var cat_product;
  if (category == "top") {
    cat_product = products.products.filter(
      (product) => product.discountPercentage > 15
    );
  } else {
    cat_product = products.products.filter(
      (product) => product.category == category
    );
  }
  res.send(JSON.stringify(cat_product));
});

app.get("/product/:name", (req, res) => {
  const name = req.params.name.toLowerCase();

  const cat_product = products.products.filter((product) =>
    product.title.toLowerCase().includes(name)
  );
  res.send(JSON.stringify(cat_product));
});

app.listen(8080);
