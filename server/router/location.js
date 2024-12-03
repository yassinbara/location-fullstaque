const express = require("express");
const {
  createLocation,
  deleteLocation,
  getAllLocations,
  getLocationById,
  updateLocation,updateStatusLocation
} = require("../controller/location");
const locationRoutes = express.Router();

locationRoutes.get("/", getAllLocations);
locationRoutes.get("/:id", getLocationById);
locationRoutes.post("/", createLocation);
locationRoutes.put("/:id", updateLocation);
locationRoutes.put("/:id/status", updateStatusLocation);
locationRoutes.delete("/:id",deleteLocation );

module.exports = locationRoutes;
