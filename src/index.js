const express = require("express");
const bodyParser = require("body-parser");
const { City } = require("./models/index");
const { PORT } = require("./config/server-config");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log(`server started on PORT: ${PORT}`);
    console.log(City);
  });
};

setupAndStartServer();
