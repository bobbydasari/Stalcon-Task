const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());

// Use book routes
app.use('/api', bookRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookDB')
    .then(() => {
        console.log(' MongoDB Connected');
    })
    .catch((err) => {
        console.error(' MongoDB Connection Error:', err.message);
    });

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
