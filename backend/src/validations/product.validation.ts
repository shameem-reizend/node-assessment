import Joi from "joi";

export const addProductSchema = Joi.object({
    name: Joi.string().length(10).required().messages({
        "string.base": "phone number should be a string",
        "string.empty": "phone number must contain a value",
        "string.length": "phone number must be 10 digit",
        "any.required": "phone number is a required field"
    }),
    sku: Joi.string().min(3).required().messages({
        "string.base": "name should be a string",
        "string.empty": "name must contain a value",
        "string.min": "name must be atleast 3 characters",
        "any.required": "name is a required field"
    }),
    price: Joi.number().min(3).required().messages({
        "string.base": "password should be a text",
        "string.min": "name must be atleast 3 characters",
        "any.required": "name is a required field"
    }),
    current_stock: Joi.number().required().messages({
        "string.base": "password should be a text",
        "string.min": "name must be atleast 3 characters",
        "any.required": "name is a required field"
    }),
    tax_percentage: Joi.string().min(3).required().messages({
        "string.base": "password should be a text",
        "string.min": "name must be atleast 3 characters",
        "any.required": "name is a required field"
    }),
})

export const updateProductSchema = Joi.object({
    name: Joi.string().length(10).messages({
        "string.base": "phone number should be a string",
        "string.empty": "phone number must contain a value",
        "string.length": "phone number must be 10 digit",
        "any.required": "phone number is a required field"
    }),
    sku: Joi.string().min(3).messages({
        "string.base": "name should be a string",
        "string.empty": "name must contain a value",
        "string.min": "name must be atleast 3 characters",
        "any.required": "name is a required field"
    }),
    price: Joi.number().min(3).messages({
        "string.base": "password should be a text",
        "string.min": "name must be atleast 3 characters",
        "any.required": "name is a required field"
    }),
    current_stock: Joi.number().messages({
        "string.base": "password should be a text",
        "string.min": "name must be atleast 3 characters",
        "any.required": "name is a required field"
    }),
    tax_percentage: Joi.string().min(3).messages({
        "string.base": "password should be a text",
        "string.min": "name must be atleast 3 characters",
        "any.required": "name is a required field"
    }),
})