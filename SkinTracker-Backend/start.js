const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "SkinTracker - API",
    description:
      "Este es el API del proyecto SkinTracker de backend del curso de CI0137",
  },
  host: "localhost:7500",
  schemes: ["http", "https"],
  definitions: {
    GetSkin: {
      name: "Nombre del skin",
      price: 9999,
      description: "Lorem ipsum kljdsf adsf asf adsf",
      picture: "https://domain.com/picture.jpg",
    },
    GetChamp: {
      name: "Nombre del champ",
      price: 9999,
      description: "Lorem ipsum kljdsf adsf asf adsf",
      picture: "https://domain.com/picture.jpg",
    },
  },
};

const outputFile = "./swagger.json";
const endpointFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
  require("./server.js");
});
