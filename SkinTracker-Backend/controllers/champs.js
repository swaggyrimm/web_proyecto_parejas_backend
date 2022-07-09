const skins = require("../champs.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models/index");
const saltRounds = 10;

  // method that obtains the total pages for x items(in this case we'll show 10 items max)
  function totalPages(){
    return Math.ceil(skins.length/10);
  }

  // method that changes the page and items shown
  function change(page, num){
    const items = [];
    if (page < 1) page = 1;
    if (page > totalPages()) page = totalPages();
    for(let i = (page-1) * num; i < (page * num) && i < skins.length; i++){
      items.push(skins[i]);
    }
    return items;
  }

  // method that gets the champions by id
  exports.getChampById = async (req, res) => {
    // #swagger.tags = ['Users']}
    try {
      const champId = parseInt(req.params.id);
      //champs es un arreglo, el arreglo donde busco el objeto del API
      const result = skins.find(skin => skin.id === champId.id);
      res.json(result);
    } catch (error) {
      res.status(500).send("Server error: " + error);
    }
  }

  // method that sorts ints(prices) descending
  function priceSort(){
    return skins.sort((a, b) => {
      return a.rp - b.rp;
    });
  }

  // method that sorts strings(names) descending
  function nameSort(){
    return skins.sort((a, b) => {
      let fa = a.skin.toLowerCase(),
          fb = b.skin.toLowerCase();

      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
    });
  }

  // method that sorts by date
  function dateSort(){
    return skins.sort((a, b) => {
      let da = new Date(a.releaseDate),
          db = new Date(b.releaseDate);
      return da - db;
    });
  }

  // method that filters(sorts) the items by the requested filter
  exports.filterSearch = async (req, res) => {
    // #swagger.tags = ['Users']
    try {
      const sort = req.query.filter;
      const numItems = parseInt(req.query.items);
      let array = [];
      let items = [];
      switch(sort) {
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
      const page = req.query.page;
      items = change(page, numItems);
      res.json(items);
    } catch (error) {
      res.status(500).send("Server error: " + error);
    }
  };