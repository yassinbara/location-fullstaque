const joi = require("joi");

// Joi schema for validating the car data
const validateCreateCar = (car) => {
  console.log( Number(new Date().getFullYear().toString()))
  const schema = joi.object({
    name: joi.string().trim().min(2).required().messages({
      "string.base": "Le nom doit être une chaîne de caractères.",
      "string.empty": "Le nom ne peut pas être vide.",
      "string.min": "Le nom doit contenir au moins 2 caractères.",
      "any.required": "Le nom est requis.",
    }),
    matricule: joi
      .string()
      .pattern(/^[0-9]{4}-[A-Z]{1}-[0-9]{2}$/)
      .required()
      .messages({
        "string.base": "Le matricule doit être une chaîne de caractères.",
        "string.pattern.base": "Le matricule doit être au format 1111-A-11.",
        "any.required": "Le matricule est requis.",
      }),
    matriculeDate: joi
      .number()
      .required()
      .max(Number(new Date().getFullYear().toString()))
      .messages({
        "string.base":
          "La date du matricule doit être une chaîne de caractères.",
        "string.empty": "La date du matricule ne peut pas être vide.",
        "string.max":
          "La date du matricule ne peut pas être supérieure à l'année actuelle.",
        "any.required": "La date du matricule est requise.",
      }), // Matricule date should be a string and required
    speed: joi.number().required().min(0).positive().messages({
      "number.base": "La vitesse doit être un nombre.",
      "number.positive": "La vitesse doit être un nombre positif.",
      "any.required": "La vitesse est requise.",
    }), // Speed should be a number and required (min 0 for valid speed)
    price: joi.number().required().min(0).messages({
      "number.base": "Le prix doit être un nombre.",
      "number.min": "Le prix doit être supérieur ou égal à 0.",
      "any.required": "Le prix est requis.",
    }), // Price should be a number and required (min 0 for valid price)
    isDisponible: joi.boolean().default(true), // isDisponible should be a boolean with a default value of true
  });

  return schema.validate({...car , matriculeDate:Number(new Date(car.matriculeDate).getFullYear().toString())}, { abortEarly: false });
};
const validateUpdateCar = (car) => {
  const schema = joi.object({
    name: joi.string().trim().min(2).required().messages({
      "string.base": "Le nom doit être une chaîne de caractères.",
      "string.empty": "Le nom ne peut pas être vide.",
      "string.min": "Le nom doit contenir au moins 2 caractères.",
      "any.required": "Le nom est requis.",
    }),
    matricule: joi
      .string()
      .pattern(/^[0-9]{4}-[A-Z]{1}-[0-9]{2}$/)
      .required()
      .messages({
        "string.base": "Le matricule doit être une chaîne de caractères.",
        "string.pattern.base": "Le matricule doit être au format 1111-A-11.",
        "any.required": "Le matricule est requis.",
      }),
    matriculeDate: joi
      .string()
      .required()
      .max(new Date().getFullYear().toString())
      .messages({
        "string.base":
          "La date du matricule doit être une chaîne de caractères.",
        "string.empty": "La date du matricule ne peut pas être vide.",
        "string.max":
          "La date du matricule ne peut pas être supérieure à l'année actuelle.",
        "any.required": "La date du matricule est requise.",
      }), // Matricule date should be a string and required
    speed: joi.number().required().min(0).positive().messages({
      "number.base": "La vitesse doit être un nombre.",
      "number.positive": "La vitesse doit être un nombre positif.",
      "any.required": "La vitesse est requise.",
    }), // Speed should be a number and required (min 0 for valid speed)
    price: joi.number().required().min(0).messages({
      "number.base": "Le prix doit être un nombre.",
      "number.min": "Le prix doit être supérieur ou égal à 0.",
      "any.required": "Le prix est requis.",
    }), // Price should be a number and required (min 0 for valid price)
    isDisponible: joi.boolean().default(true), // isDisponible should be a boolean with a default value of true
  });

  return schema.validate(car, { abortEarly: false });
};


module.exports = {validateUpdateCar, validateCreateCar};
