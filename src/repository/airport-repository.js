const CrudRepository = require("./crud-repository.js");
const { Airport } = require("../models/airport.js");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
