const multer = require("multer");
const path = require("path");
const { nanoid } = require("nanoid");

const storage = multer.diskStorage({
  destination: (req, file, cb)=> {
    return cb(null, path.resolve(__dirname + "/upload"));
  },

  filename: (req, file, cb)=> {
    return cb(null, `${nanoid()}${file.originalname}`);
  }
});

const upload = multer({ storage });

module.exports = upload;