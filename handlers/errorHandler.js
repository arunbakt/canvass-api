const { ValidationError } = require('joi');

const errorHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        res.status(422).send({
            code: 422,
            message: err.details.map(m => m.message).join(";"),
        });
    } else {
        res.status(500).send({
            code: 500,
            message: `Unknown error (${err.message})`,
        });
    }
}

module.exports = errorHandler;