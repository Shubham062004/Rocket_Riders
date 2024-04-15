const mongoose = require('mongoose');
require('dotenv').config();

let mongoConnection;
// console.log({"u": process.env.MONGO_URI})


async function ConnectToDB() {
    try {
        const mongoUri = process.env.MONGO_URI;
        mongoConnection = await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB database.');
        return mongoConnection
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function stopDatabase() {
  if (!mongoConnection) return;

  await mongoConnection.close();
  mongoConnection = null;

  console.log('Disconnected from local MongoDB database.');
}

async function isConnected() {
  mongoConnection = await mongoose.connect(process.env.MONGO_URI)
  console.log(mongoConnection);
  return mongoConnection.readyState === 1;
}
module.exports = { ConnectToDB, stopDatabase, isConnected };