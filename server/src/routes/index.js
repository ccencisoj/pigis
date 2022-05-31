const router = require("express").Router();

router.use("/api/parent", require("./api/parent"));
router.use("/api/child", require("./api/child"));
router.use("/api/test", require("./api/test"));
router.use("/api/race", require("./api/race"));
router.use("/api/image", require("./api/image"));

module.exports = router;