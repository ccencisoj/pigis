const { Schema, model, Types } = require("mongoose");
const { address } = require("ip");

const Image = new Schema({
  path: {type: String, required: true}
});

Image.set("toJSON", {
  transform: (_, returnedObject)=> {
    returnedObject.url = `http://${global.address}/api/image/${returnedObject._id}`;
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.path;
  }
});

module.exports = model("Image", Image);