const { CustomAPIError }= require('../errors/error.errors')
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError)
        return res.status(err.statusCode).json({ status: "Error", message: err.message });
    return res.status(500).json({status: "Error", message :err.message})
}

module.exports = errorHandler