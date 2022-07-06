const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { sendRecoveryCodeEmail } = require("../services/mailService");
const db = require("../models/index");
const saltRounds = 10;

exports.createProduct = async (req, res) => {
  // #swagger.tags = ['Product']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Create a product',
          schema: { $ref: '#/definitions/AddProduct' }
  } */
  try {
    const productPayload = req.body;
    /*const newUser = await db.User.create({
      name: userPayload.name,
      email: userPayload.email,
      password: await bcrypt.hash(userPayload.password, saltRounds),
      phoneCountryCode: userPayload.phoneCountryCode,
      phone: userPayload.phone,
      birthdate: new Date(userPayload.birthdate),
    });*/
    res.json(productPayload);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrió un error al insertar el usuario.",
      error,
    });
    return;
  }

};


  // quiero conseguir la skin en específico que me mandan a busacr
  exports.getSkinById = async (req, res) => {
    // #swagger.tags = ['Users']}
    try {
      const productPayload = req.body;
      
      //skins es un arreglo, el arreglo donde busco el objeto del API
      const result = skins.find(skin => skin.id === productPayload.id);
      res.json(result);
    } catch (error) {
      res.status(500).send("Server error: " + error);
    }
  }

  //no se si hacer todo este proceso es necesario,  no solo puedo traerme todo el json?
  exports.listSkins = async (req, res) => {
    // #swagger.tags = ['Users']
    try {
      //var array = [];
      const productPayload = req.body;//es necesario si es un get?
      const result = skins//devolvería el arreglo completo;
      res.json(result);
    } catch (error) {
      res.status(500).send("Server error: " + error);
    }
  };

  //sort ints(prices) descending
function priceSort(){
  return skins.sort((a, b) => {
    return a.RP - b.RP;
  });
}

//sort strings(names)
function nameSort(){
  return skins.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  });
}

//sort by date
function dateSort(){
  return skins.sort((a, b) => {
    let da = new Date(a.releaseDate),
        db = new Date(b.releaseDate);
    return da - db;
  });
}

  //se supone que existen funciones que lo hacen en npm
  exports.filterSearch = async (req, res) => {//haríamos este método en lugar de un getSkins general?
    // #swagger.tags = ['Users']
    try {
      //filter me imagino que viene del payload
      const filterPayload = req.body;
      const filter = filterPayload.filter;
      let array = [];
      switch(filter) {
      case "price":
        // code block
        array = priceSort();
      break;
      case "name":
        // code block
          array = nameSort();
      break;

      case "date":
        // code block
          array = dateSort();
      break;
      default:
        // code block
          array = skins;
      }
      //return array;
      res.json(array);
    } catch (error) {
      res.status(500).send("Server error: " + error);
    }
  };