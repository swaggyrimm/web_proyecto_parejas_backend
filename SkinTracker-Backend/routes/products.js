const express = require("express");
const {
  createProduct,
  getSkinById,
  listSkins,
  filterSearch,
} = require("../controllers/products");
const { userIsAuthenticated, userIsInRole } = require("../middlewares/auth");
const { ROLES } = require("../utils/constants");
const { validateSchema } = require("../middlewares/validation");
const {
  createProductSchema,
} = require("../validators/products");

const router = express.Router();

//router.route("/").post([validateSchema(createProductSchema)], createProduct);
//router.route("/Skins").post(listSkins);
router.route("/").get(filterSearch);
router.route("/:id").get(getSkinById);//preguntar al profe porque no sirve esta ruta

module.exports = router;
