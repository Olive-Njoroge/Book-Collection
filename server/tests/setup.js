const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');

let mongoServer;   // Will hold our in-memory MongoDB server instance


// Run once BEFORE all tests
beforeAll(async() => {
    mongoServer = await MongoMemoryServer.create(); // 1. Start an in-memory MongoDB server
    const mongoURI = mongoServer.getUri(); // 2. Get the connection URI for the in-memory database
    await mongoose.connect(mongoURI);  // 3. Connect Mongoose to the in-memory database. This replaces connecting to a real MongoDB instance
});


// Run once AFTER all tests
afterAll(async() => {
    await mongoose.disconnect();  // 1. Disconnect Mongoose from the database
    await mongoose.stop();  // 2. Stop the in-memory MongoDB server. This clears all data since it's stored only in memory
});


// Run AFTER each test
afterEach(async() => {
    const collections = mongoose.connection.collections;  // Get all collections (tables) in the current in-memory database

     // Loop through each collection and delete all documents
    // This ensures every test starts with a clean, empty database
    for(const key in collections){
        await collections[key].deleteMany({});
    }
});