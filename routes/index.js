const express = require("express");
const router = express.Router();

router.get("/api", async (req, res) => {
  return res.send({
    success: true,
    status: 200,
    message: "This is a test route",
    data: {},
  });
});

module.exports = router;
