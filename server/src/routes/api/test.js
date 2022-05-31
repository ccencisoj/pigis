const router = require("express").Router();

router.get("/hostname", (req, res)=> {

  console.log(req.hostname);

  res.json({ hostname: req.hostname }); 
});

module.exports = router;