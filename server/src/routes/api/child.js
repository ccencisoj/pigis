const router = require("express").Router();
const Child = require("../../models/Child");
const auth = require("../auth");
const types = require("../types");
const validate = require("../validate");
const Race = require("../../models/Race");
const LoginError = require("../../errors/LoginError");

router.post("/login",
  validate.body({
    code: types.AccountCode.required()
  }),
  async (req, res)=> {

  const child = await Child.findOne({
    _id: req.body.code
  }).populate("image");

  if(!child) 
    throw new LoginError("El codigo es incorrecto");

  req.session.child = child._id;

  return res.json({ child: {...child.toJSON(), code: req.body.code} });
});

router.get("/logout", 
  async (req, res)=> {
  req.session.destroy();
  return res.end("ok");
});

router.get("/current",
  auth.child({required: true}), 
  async (req, res)=> {

  const child = await Child.findOne({
    _id: req.session.child
  });
  
  return res.json({ child });
});

router.get("/racesHistory",
  auth.child({required: true}), 
  async (req, res)=> {
  
  const racesHistory = await Race.find({
    child: req.session.child
  });
  
  res.json({ racesHistory });
});

module.exports = router;