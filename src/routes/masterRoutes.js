const express = require("express");
const app = express();

const errorHandle = require("../error/errorHandle");
// custom error handlers
const customErrorHandler = require('../error/customError');
// import routes 
const userRoutes = require('./userRoutes');


// use all routes
app.use(userRoutes);


app.use((req, res, next) => {
    next(customErrorHandler('page not found', 404, false));
});

app.use(errorHandle)

module.exports = app;