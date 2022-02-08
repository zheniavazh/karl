const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/good", require("./good.routes"));
router.use("/category", require("./category.routes"));

module.exports = router;
