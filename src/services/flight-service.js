const {
  FlightRepository,
  AirplaneRepository,
} = require("../repository/index.js");
const { compareTime } = require("../utils/helper.js");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less than departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("something went wrong with sevice layer");
      throw error;
    }
  }

  async getAllFlights(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("something went wrong with service layer");
      throw error;
    }
  }
}

module.exports = FlightService;
