const types = require("../types");
const auth = require("../auth");
const upload = require("../upload");
const bcrypt = require("bcrypt");
const validate = require("../validate");
const router = require("express").Router();
const Child = require("../../models/Child");
const Image = require("../../models/Image");
const Parent = require("../../models/Parent");
const LoginError = require("../../errors/LoginError");

router.post("/create",
  validate.body({
    name: types.Name.required(),
    email: types.Email.required(),
    password: types.Password.required()
  }),
  async (req, res)=> {
  
  const passwordHash = bcrypt.hashSync(
    req.body.password, 8);

  const parent = await Parent.create({
    name: req.body.name,
    email: req.body.email,
    password: passwordHash,
    debt: 0
  });

  req.session.parent = parent._id;
  
  return res.json({ parent });
});

router.post("/login", 
  validate.body({
    email: types.Email.required(),
    password: types.Password.required()
  }), 
  async (req, res)=> {

  const parent = await Parent.findOne({
    email: req.body.email
  });

  if(!parent)
    throw new LoginError("Email or password is incorrect");

  if(!bcrypt.compareSync(
    req.body.password, parent.password))
    throw new LoginError("Email or password is incorrect"); 

  req.session.parent = parent._id;

  return res.json({ parent });
});

router.get("/logout", 
  async (req, res)=> {
  req.session.destroy();
  return res.end("ok");
});

router.get("/current", 
  auth.parent({required: false}),
  async (req, res)=> {  
  
  const parent = await Parent.findOne({
    _id: req.session.parent
  });

  return res.json({ parent });
});

router.post("/createChild", 
  auth.parent({required: true}),
  upload.single("image"),
  validate.file({empty: false}), 
  validate.body({
    name: types.Name.required()
  }),
  async (req, res)=> {  

  const image = await Image.create({
    path: req.file.path
  });   

  let child = await Child.create({
    parent: req.session.parent,
    name: req.body.name,
    image: image._id
  });
  
  child = await Child.findOne({
    _id: child.id
  })
  .populate("parent")
  .populate("image");

  return res.json({ child });
});

router.post("/deleteChild",
  auth.parent({required: true}), 
  validate.body({
    childId: types.ObjectId
  }),
  async (req, res)=> {

  await Child.deleteOne({
    _id: req.body.childId
  });

  res.json({ deleted: true });
});

router.post("/generateChildCode",
  auth.parent({required: true}),
  validate.body({
    childId: types.ObjectId
  }), 
  async (req, res)=> {

  const code = req.body.childId;

  return res.json({ code });
});

router.get("/childList", 
  auth.parent({required: true}),
  async (req, res)=> {
  
  const childList = await Child.find({
    parent: req.session.parent
  }).populate("image");

  return res.json({ childList });
});

module.exports = router;