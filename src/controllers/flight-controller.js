const { FlightService } = require("../services/index.js");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: "successfully created the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot create the flight",
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(201).json({
      data: flights,
      success: true,
      err: {},
      message: "successfully fetched the flights",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: {},
      message: "Cannot fetch the flights",
    });
  }
};

module.exports = {
  create,
  getAll,
};
