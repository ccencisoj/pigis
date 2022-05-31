const Child = require("../models/Child");

const terminateCurrentRace = async (req, res, next)=> {
  if(req.session && req.session.currentRace) {
    const race = Child.findOne({
      _id: req.session.currentRace
    });

    race.winned = false;
    await race.save();
  }

  next();
}

module.exports = terminateCurrentRace;