const pizza = require("./models/pizza")

const pizzaData = [
  {
    name: "Hawaiian",
    toppings: ["ham", "pineapple", "cheese"],
    price: 10,
  },
  {
    name: "Pepperoni",
    toppings: ["pepperoni", "cheese"],
    price: 9,
  },
  {
    name: "Veggie",
    toppings: ["olives", "mushrooms", "onions", "cheese"],
    price: 8,
  },
  {
    name: "Meat Lovers",
    toppings: ["beef", "chicken", "bacon", "cheese"],
    price: 12,
  },
  {
    name: "Veggie",
    toppings: ["olives", "mushrooms", "onions", "cheese"],
    price: 8,
  },
];

// import models
//const pizza = require("../models/pizza");

// load data
const loadInitialData = async () => {
  // load pizzas
  for (let i=0; i< pizzaData.length; i++) {
     let pizza = pizzaData[i] ;
  try{
    console.log(pizza)
  } catch{
    console.log("Pizzas loaded");

  }
}
};

loadInitialData();
