const express = require("express");
const CityController = require("../../controllers/city-controller.js");
const AirportController = require("../../controllers/airport-controller.js");
const FlightController = require("../../controllers/flight-controller.js");
const FlightMiddleware = require("../../middlewares/index.js");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);
router.patch("/airport/:id", AirportController.update);

router.post(
  "/flight",
  FlightMiddleware.FlightMiddleware.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);

module.exports = router;
