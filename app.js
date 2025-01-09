// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();


// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(cors({
        origin: ["http://localhost:5173"]
    }));

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const bookRoutes = require("./routes/book.routes")
app.use("/api", bookRoutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
