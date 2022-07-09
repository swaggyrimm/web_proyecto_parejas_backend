const express = require("express");
const {
  getSkinById,
  filterSearch,
} = require("../controllers/skins");


const router = express.Router();

router.route("/").get(filterSearch);
router.route("/:id").get(getSkinById);//preguntar al profe porque no sirve esta ruta

module.exports = router;
