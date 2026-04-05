const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'YOUR_MONGODB_CONNECTION_STRING'; // Replace with your MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// API routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes
app.use('/api/listings', require('./routes/listings')); // Listings routes
app.use('/api/users', require('./routes/users')); // Users routes
app.use('/api/messages', require('./routes/messages')); // Messages routes
app.use('/api/payments', require('./routes/payments')); // Payments routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
