const Image = require("../../models/Image");
const router = require("express").Router();
const types = require("../types");
const validate = require("../validate");
const NoFoundError = require("../../errors/NoFoundError");

router.get("/:imageId",
  validate.params({
    imageId: types.ObjectId.required()
  }), async (req, res)=> {

  const image = await Image.findOne({
    _id: req.params.imageId
  });

  if(!image)
    throw new NoFoundError("La imagen no ha sido encontrada");

  res.sendFile(image.path);
});

module.exports = router;