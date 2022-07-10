const express = require("express");
const {
  getChampById,
  filterSearch
} = require("../controllers/champs");


const router = express.Router();

// setting the different routes for the requests
router.route("/").get(filterSearch);
router.route("/:id").get(getChampById);

module.exports = router;
