const express = require("express");
const {
  getSkinById,
  filterSearch,
} = require("../controllers/skins");


const router = express.Router();

// setting the different routes for the requests
router.route("/").get(filterSearch);
router.route("/:id").get(getSkinById);

module.exports = router;
