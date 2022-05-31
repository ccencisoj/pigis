const router = require("express").Router();
const Race = require("../../models/Race");
const types = require("../types");
const auth = require("../auth");
const validate = require("../validate");
const terminateCurrentRace = require("../../helpers/terminateCurrentRace");

router.post("/start",
  auth.child({required: true}),
  validate.body({
    time: types.RaceTime.required()
  }),
  async (req, res)=> {
  
  const race = await Race.create({
    child: req.session.child,
    time: req.body.time,
    winned: false,
    fromDate: Date.now(),
    toDate: Date.now() + req.body.time,
    burnedCalories: 0,
  });

  req.session.currentRace = race.id;

  return res.json({ started: true, race });
});

router.post("/end", 
  auth.child({required: true}),
  validate.body({
    winned: types.Boolean
  }), 
  async (req, res)=> {
  
  const race = await Race.findOne({
    _id: req.session.currentRace
  });

  if(!race) return res.json({ ended: true });

  const winned = req.body.winned;
  const time = race.time;

  race.winned = winned;
  race.burnedCalories = winned ? (time * 6) : 0;
  await race.save();

  delete req.session.currentRace;
  
  return res.json({ ended: true, race });
});

router.get("/current",
  auth.child({required: true}),
  async (req, res)=> {

  const race = await Race.findOne({
    _id: req.session.currentRace
  });

  res.json({ race });
});

module.exports = router;