const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const Game = require('./Components/GameModal'); // Update the path to your Game model

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://ralli:Razeenali123@cluster0.pz5hb7x.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Create a new game document
app.post('/api/games', async (req, res) => {
    const { name, background_image } = req.body;

    try {
        // Create a new document in the games collection
        await Game.create({ name, background_image });
        res.sendStatus(200); // Send a success status code
    } catch (error) {
        console.error('Error saving game data to MongoDB:', error);
        res.sendStatus(500); // Send an error status code
    }
});

// Retrieve all game documents
app.get('/api/mylist', async (req, res) => {
    try {
        // Retrieve all documents from the games collection
        const games = await Game.find();
        res.json(games); // Send the retrieved games as a JSON response
    } catch (error) {
        console.error('Error retrieving game data from MongoDB:', error);
        res.sendStatus(500); // Send an error status code
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});