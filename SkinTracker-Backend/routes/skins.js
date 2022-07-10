const express = require("express");
const {
  getSkinById,
  filterSearch,
  getChampSkinsByName
} = require("../controllers/skins");


const router = express.Router();

// setting the different routes for the requests
//router.route("/").get(filterSearch); hay que descomentar para que filtre el home y etc...
router.route("/").get(getChampSkinsByName);//arreglar esta ruta para poder llamarla diferente de / para que no choque con la de filterSearch
router.route("/:id").get(getSkinById);


module.exports = router;
