const { Schema, model, Types } = require("mongoose");

const Parent = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

Parent.set("toJSON", {
  transform: (_, returnedObject)=> {   
    returnedObject.id = returnedObject._id;
    delete returnedObject.password;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

Parent.methods.sessionJSON = function() {
  const parent = this;
  return { id: parent._id };
}

module.exports = model("Parent", Parent);