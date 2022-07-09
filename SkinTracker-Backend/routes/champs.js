const express = require("express");
const {
  getChampById,
  filterSearch,
} = require("../controllers/champs");


const router = express.Router();

router.route("/").get(filterSearch);
router.route("/:id").get(getChampById);

module.exports = router;
