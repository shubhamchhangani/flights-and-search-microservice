const { AirportService } = require("../services/index.js");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(201).json({
      message: "Successfully created the airport",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot create a new airport",
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airportService.destroy(req.params.id);
    return res.status(201).json({
      message: "Successfully deleted the airport",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot delete the airport",
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await airportService.get(req.params.id);
    return res.status(201).json({
      message: "Successfully fetched the airport",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot fetch the airport",
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await airportService.getAll();
    return res.status(201).json({
      message: "Successfully fetched all the airports",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot fetch the airports",
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airportService.update(req.params.id, req.body);
    return res.status(201).json({
      message: "Successfully updated the airport",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot update the airport",
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  getAll,
  update,
};
