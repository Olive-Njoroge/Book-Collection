const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express(); //Fire up express

const mongoUri = 'mongodb://localhost:27017/bookdb';
const PORT = 3000;

app.use(cors()); //middleware for cors
app.use(express.json()); // Middleware to parse JSON
app.use('/books', bookRoutes); //Enable routes

//fir up mongodb connection
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Mongodb connected')).catch(err => console.error('Mongodb error: ', err));

//Listener
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});