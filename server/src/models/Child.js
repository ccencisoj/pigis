const { Schema, model, Types } = require("mongoose");

const Child = new Schema({
  parent: {type: Types.ObjectId, ref: "Parent", required: true},
  name: {type: String, required: true},
  parent: {type: Types.ObjectId, ref: "Parent", required: true},
  image: {type: Types.ObjectId, ref: "Image", required: true},
  cash: {type: Number, default: 0},
});

Child.set("toJSON", {
  transform: (_, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

Child.methods.sessionJSON = function() {
  const child = this;
  return { id: child._id };
}

module.exports = model("Child", Child);