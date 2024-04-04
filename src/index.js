const express = require("express");
const bodyParser = require("body-parser");
const { City } = require("./models/index");
const { PORT } = require("./config/server-config");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log(`server started on PORT: ${PORT}`);
    console.log(City);
  });
};

setupAndStartServer();
