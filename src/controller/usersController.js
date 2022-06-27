
const userModel = require('../models/usersModels');
const customErrorHandler = require('../error/customError');
const asyncMiddleware = require('../utils/asyncMiddleware');


module.exports.register = asyncMiddleware(async (req, res, next) => {
    const user = await userModel.find()
    console.log(user)
    res.send(user);
})