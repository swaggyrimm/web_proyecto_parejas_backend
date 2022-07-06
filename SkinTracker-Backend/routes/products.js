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
//router.route("/Skins").patch(filterSearch);
router.route("/Skin").post(getSkinById);
router.route("/Skins").get(listSkins);

module.exports = router;
