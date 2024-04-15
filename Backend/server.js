const express = require('express');
const dotenv = require("dotenv").config();
const port = process.env.PUBLIC_PORT || 1043;
const Bike = require("./bikeInfo.json");

const app = express();
const {ConnectToDB} = require("./database")


app.use(express.json())

// app.use("/api/bike", require("./"));
// app.use("/api/user", require("./userRoute"));

ConnectToDB().then((mongoConnection) => {
    if (mongoConnection) {
        console.log("Connected to database");

        // Assuming app is already defined and initialized elsewhere
        app.get("/", (req, res) => {
            res.json({ message: "Connected" });
        });

        // Get all bikes
        // app.get("/bikes", async (req, res) => {
        //     try {
        //         const bikes = Bike.find();
        //         res.json(bikes);
        //     } catch (error) {
        //         console.error("Error fetching bikes:", error);
        //         res.status(500).json({ error: "Internal server error" });
        //     }
        // });
        app.get('/api/bikes', (req,res) => {
            return res.json(Bike)
        })

        // Get a single bike
        app.get("/bikes/:id", async (req, res) => {
            try {
                const bike = await Bike.findById(req.params.id);
                if (!bike) {
                    res.status(404).json({ error: "Bike not found" });
                } else {
                    res.json(bike);
                }
            } catch (error) {
                console.error("Error fetching bike:", error);
                res.status(500).json({ error: "Internal server error" });
            }
        });

        // Create a new bike
        app.post("/bikes", async (req, res) => {
            try {
                const newBike = await Bike.create(req.body);
                res.status(201).json(newBike);
            } catch (error) {
                console.error("Error creating bike:", error);
                res.status(400).json({ error: "Bad request" });
            }
        });

        // Update a bike
        app.put("/bikes/:id", async (req, res) => {
            try {
                const updatedBike = await Bike.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedBike) {
                    res.status(404).json({ error: "Bike not found" });
                } else {
                    res.json(updatedBike);
                }
            } catch (error) {
                console.error("Error updating bike:", error);
                res.status(400).json({ error: "Bad request" });
            }
        });

        // Delete a bike
        app.delete("/bikes/:id", async (req, res) => {
            try {
                const deletedBike = await Bike.findByIdAndDelete(req.params.id);
                if (!deletedBike) {
                    res.status(404).json({ error: "Bike not found" });
                } else {
                    res.json({ message: "Bike deleted successfully" });
                }
            } catch (error) {
                console.error("Error deleting bike:", error);
                res.status(400).json({ error: "Bad request" });
            }
        });
    } else {
        console.log("Disconnected from database");
        app.get("/", (req, res) => {
            res.json({ message: "Disconnected" });
        });
    }
});
  
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})