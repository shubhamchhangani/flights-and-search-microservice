const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("something went wrong with city service layer");
      throw { error };
    }
  }

  async deleteCity(city_id) {
    try {
      const response = await this.cityRepository.deleteCity(city_id);
      return response;
    } catch (error) {
      console.log("something went wrong with city service layer");
      throw { error };
    }
  }

  async updateCity(city_id, data) {
    try {
      const city = await this.cityRepository.updateCity(city_id, data);
      return city;
    } catch (error) {
      console.log("something went wrong with city service layer");
      throw { error };
    }
  }

  async getCity(city_id) {
    try {
      const city = await this.cityRepository.getCity(city_id);
      return city;
    } catch (error) {
      console.log("something went wrong with city service layer");
      throw { error };
    }
  }

  async getAllCities() {
    try {
      const cities = await this.cityRepository.getAllCities();
      return cities;
    } catch (error) {
      console.log("something went wrong with city service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
