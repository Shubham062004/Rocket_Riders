const express = require("express");
const router = express.Router();
const {
  getBikes,
  createBike,
  getBike,
  updateBike,
  deleteBike,
} = require("./bikeController");

// const validateToken = require("../middleware/validateTokenHandler");
// router.use(validateToken);

router.route("/").get(getBikes).post(createBike);
router.route("/:id").get(getBike).put(updateBike).delete(deleteBike);

module.exports = router;