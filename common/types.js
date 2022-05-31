const yup = require("yup");
const ObjectId = require("bson-objectid").default;

const types = {};

types.Boolean = yup
  .boolean();

types.Name = yup
  .string()
  .min(2)
  .max(32);

types.Email = yup
  .string()
  .email();

types.Password = yup
  .string()
  .min(8)
  .max(64);

types.AccountCode = yup
  .string()
  .test(
    "Validate AccountCode",
    "Codigo de cuenta no es valido",
    (value)=> ObjectId.isValid(value)
  );

types.ObjectId = yup
  .string()
  .test(
    "Validate ObjectId",
    "${path} is not valid ObjectId",
    (value)=> ObjectId.isValid(value)
  );
  
types.RaceTime = yup
  .number()
  .test(
    "Validate race time",
    "${path} is not valid time",
    (value)=> (
      value === (600000 * 1) || 
      value === (600000 * 2) ||
      value === (600000 * 3)
    )
  );

module.exports = types;