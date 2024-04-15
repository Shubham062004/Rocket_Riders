const mongoose = require("mongoose");

const bikeSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Add image of bike"],
    },
    bikeName: {
      type: String,
      required: [true, "Enter bike name"],
    },
    price: {
        type: Number,
        required: [true, "Enter price in Lakhs"],
    },
    engine: {
        type: Number,
        required: [true, "Enter engine in CC"],
    },
    power: {
        type: Number,
        required: [true, "Enter power in PS"],
    },
    torque: {
        type: Number,
        required: [true, "Enter torque Nm"],
    },
    mileage: {
        type: Number,
        required: [true, "Enter milage in kmpl"],
    },
    kerbWeight:{
        type: Number,
        required: [true, "Enter kerbWeight in kg"],
    },
    color: {
        type: String,
        required: [true, "Enter color"],
    }
  },

);