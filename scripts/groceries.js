// grocery list products
var products = [
  {
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 0.99,
    VegetarianAndGlutenFree: true,
  },
  {
    name: "bread",
    vegetarian: true,
    organic: true,
    glutenFree: false,
    price: 1.35,
    VegetarianAndGlutenFree: false,
  },
  {
    name: "banana",
    vegetarian: true,
    organic: true,
    glutenFree: true,
    price: 1.99,
    VegetarianAndGlutenFree: true,
  },
  {
    name: "milk",
    vegetarian: true,
    organic: true,
    glutenFree: true,
    price: 1.99,
    VegetarianAndGlutenFree: true,
  },
  {
    name: "apple",
    vegetarian: true,
    organic: true,
    glutenFree: true,
    price: 2.59,
    VegetarianAndGlutenFree: true,
  },
  {
    name: "eggs",
    vegetarian: true,
    organic: true,
    glutenFree: true,
    price: 2.69,
    VegetarianAndGlutenFree: true,
  },
  {
    name: "pasta",
    vegetarian: true,
    organic: true,
    glutenFree: false,
    price: 2.99,
    VegetarianAndGlutenFree: false,
  },
  {
    name: "tuna",
    vegetarian: false,
    organic: true,
    glutenFree: true,
    price: 3.5,
    VegetarianAndGlutenFree: false,
  },
  {
    name: "chicken",
    vegetarian: false,
    organic: true,
    glutenFree: true,
    price: 3.99,
    VegetarianAndGlutenFree: false,
  },

  {
    name: "salmon",
    vegetarian: false,
    organic: true,
    glutenFree: true,
    price: 10.0,
    VegetarianAndGlutenFree: false,
  },
  {
    name: "Atlantic salmon",
    vegetarian: false,
    organic: true,
    glutenFree: true,
    price: 12.0,
    VegetarianAndGlutenFree: false,
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let product_names = [];
  for (let i = 0; i < prods.length; i += 1) {
    if (restriction == "Vegetarian" && prods[i].vegetarian == true) {
      product_names.push(prods[i]);
    } else if (restriction == "GlutenFree" && prods[i].glutenFree == true) {
      product_names.push(prods[i]);
    } else if (restriction == "None") {
      product_names.push(prods[i]);
    } else if (
      restriction == "VegetarianAndGlutenFree" &&
      prods[i].VegetarianAndGlutenFree == true
    ) {
      product_names.push(prods[i]);
    }
  }
  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
