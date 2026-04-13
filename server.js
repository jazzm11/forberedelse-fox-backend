// Dependencies
const express = require('express');

// App Settings
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Configuration
const connectDB = require("./config/db");
connectDB(process.env.MONGODB_URL);

// Route Imports
const defaultRoute = require("./router/defaultRouter");
const foxRoute = require("./router/foxRouter");

// Routes
app.use("/api", foxRoute);
app.use(defaultRoute);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});