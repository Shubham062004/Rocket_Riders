const asyncHandler = require("express-async-handler");
const bike = require("./bikeSchema");

// Get all bikes
const getBikes = asyncHandler(async (req, res) => {
    const bikes = await bike.find({ user_id: req.user.id });
});

// Create bike
const createBike = asyncHandler(async (req, res) => {
    // const { bikeName, price, engine, power, torque, mileage, kerbWeight, color, image } = req.body;
    const { bikeName, price, engine, power, torque, mileage, kerbWeight, color } = req.body;

    // if (!bikeName || !price || !engine || !power || !torque || !mileage || !kerbWeight || !color || !image) {
    if (!bikeName || !price || !engine || !power || !torque || !mileage || !kerbWeight || !color ) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }

    const createdBike = await bike.create({
        bikeName,
        price,
        engine,
        power,
        torque,
        mileage,
        kerbWeight,
        color,
        // image,
    });

    res.status(201).json(createdBike);
});

// Get one bike
const getBike = asyncHandler(async (req, res) => {
    const gBike = await bike.findById(req.params.id);

    if (!gBike) {
      res.status(404);
      throw new Error("Bike not found");
    }
  
    res.status(200).json(gBike);
});

// Update bike
const updateBike = asyncHandler(async (req, res) => {
    const Bike = await bike.findById(req.params.id);
    
    if (!Bike) {
        res.status(404);
        throw new Error("Bike not found");
    }
    
    // if (Bike.user_id.toString() !== req.user.id) {
        //     res.status(403);
        //     throw new Error("User doesn't have permission to update other user's bikes");
        // }
        
        const updatedBike = await bike.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        res.status(200).json(updatedBike);
});

// Delete bike
const deleteBike = asyncHandler(async (req, res) => {
    const delBike = await bike.findById(req.params.id);

    if (!delBike) {
        res.status(404);
        throw new Error("Bike not found");
    }

    if (delBike.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to delete other user's bikes");
    }

    await bike.deleteOne({ _id: req.params.id });
    res.status(200).json(delBike);
    
});

module.exports = {
    getBikes,
    createBike,
    getBike,
    updateBike,
    deleteBike,
};