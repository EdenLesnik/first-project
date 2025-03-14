import Joi from "joi";

//pattern or regex are the same thing 
//rule takes an object and includes a message inside 
//rulest is when we want to write the the neccessary regex 

const RegisterSchema = Joi.object({
    email: Joi.string().ruleset.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
        .rule({
            message: `email must be valid`
        }).required(),

    password: Joi.string().ruleset.pattern(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{8,20})/)
        .rule({
            message: "password must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-"
        }).required(),

    name: Joi.object().keys({
        first: Joi.string().min(2).max(256).required(),
        middle: Joi.string().allow(""),
        last: Joi.string().min(2).max(256).required()
    }).required(),

    phone: Joi.string().ruleset.pattern(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/).rule({
        message: `must be a valid phone number`,
    }).required(),

    image: Joi.object().keys({
        url: Joi.string()
            .uri()
            .rule({
                message: `must be a valid image URL`
            }).allow(""),
        alt: Joi.object().min(2).max(256).allow("")
    }).required(),

    address: Joi.object().keys({
        country: Joi.string().required(),
        state: Joi.string().allow(""),
        city: Joi.string().required(),
        street: Joi.string().required(),
        houseNumber: Joi.string().required(),
        zip: Joi.number().required(),
    }).required(),

    isBusiness: Joi.boolean().required(),

});

export default RegisterSchema;

