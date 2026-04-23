require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'https://skyline-architecture.vercel.app/'
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch(err => console.log("❌ Database Connection Error:", err));

// Routes
app.use('/api', contactRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});