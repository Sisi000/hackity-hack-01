//

const mongoose = require("../mongoose");
const Schemas = mongoose.Schema;

// pizza schema
const pizzaSchema = new Schemas({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  toppings: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

// create model from schema
const Pizza = mongoose.model("Pizza", pizzaSchema);

const createPizza = async(pizza) => {
  const newPizza = await Pizza.create(pizza)
  return newPizza
}

// export model
module.export = {Pizza, createPizza};
