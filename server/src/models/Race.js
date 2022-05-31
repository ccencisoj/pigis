const { Schema, model, Types } = require("mongoose");

const Race = new Schema({
  child: {type: Types.ObjectId, ref: "Child", required: true},
  time: {type: Number, required: true},
  winned: {type: Boolean, default: false},
  fromDate: {type: Number, default: 0},
  toDate: {type: Number, default: 0},
  burnedCalories: {type: Number, default: 0}
});

Race.set("toJSON", {
  transform: (_, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = model("Race", Race);