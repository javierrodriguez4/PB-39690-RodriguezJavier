const Joi = require("joi");


const validateBase = async (product) => {

    const productSchema = Joi.object({
        //id: Joi.number().required('Por favor ingrese el valor'),
        title: Joi.string().required(),
        price: Joi.number().required(),
        thumbnail: Joi.string().required(),
        code: Joi.number().required(),
        stock: Joi.number().required()
    });

    return await productSchema.validateAsync()
}

module.exports = validateBase;