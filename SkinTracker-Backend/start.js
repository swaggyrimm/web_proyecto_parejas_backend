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
    AddUser: {
      name: "CI0137",
      email: "cloud@polpocr.com",
      password: "patito",
      phoneCountryCode: 506,
      phone: 70155104,
      birthdate: "1989-10-16",
    },
    AddProduct: {
      name: "Nombre del producto",
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
