const joi = require('@hapi/joi')

module.exports = joi.object({
    description: joi.string()
        .min(10)
        .max(1000)
        .required(),
    tags: joi.array().items(
        joi.string()
            .min(3)
            .max(16)
    ),
    agent: joi.string()
        .min(3)
        .max(16)
        .required()
})