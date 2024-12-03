const Location = require("../models/Location"); // Adjust path to the Location model
const User = require("../models/User"); // Adjust path to the User model
const Car = require("../models/Car"); // Adjust path to the Car model

// Get all locations
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find().populate("car");

    res.status(200).json(locations);
  } catch (error) {
    console.error("Error fetching locations:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not retrieve locations." });
  }
};

// Get a location by ID
const getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);

    if (!location) {
      return res.status(404).json({ message: "Location not found." });
    }
    res.status(200).json(location);
  } catch (error) {
    console.error("Error fetching location by ID:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not retrieve location." });
  }
};

// Create a new location
const createLocation = async (req, res) => {
  try {
    const {
      startAt,
      endAt,
      clientId,
      carId,
      price,
      status,
      clientFirstNameName,
      clientLastName,
      CIN,
      adress,
    } = req.body;

    // Validate required fields
    if (
      !startAt ||
      !endAt ||
      !clientId ||
      !carId ||
      !price ||
      !clientFirstNameName ||
      !clientLastName ||
      !CIN ||
      !adress
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the user and car exist
    const user = await User.findById(clientId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ message: "Car not found." });
    }

    // Create the new location
    const location = new Location({
      startAt,
      endAt,
      clientId,
      carId,
      price,
      status,
      clientFirstNameName,
      clientLastName,
      CIN,
      adress,
    });

    // Save the location to the database
    await location.save();
    res.status(201).json(location);
  } catch (error) {
    console.error("Error creating location:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not create location." });
  }
};

// Update a location's details
const updateLocation = async (req, res) => {
  try {
    const {
      startAt,
      endAt,
      clientId,
      carId,
      price,
      status,
      clientFirstNameName,
      clientLastName,
      CIN,
      adress,
    } = req.body;

    // Initialize updates object
    const updates = {};

    // Only update the fields that are provided
    if (startAt) updates.startAt = startAt;
    if (endAt) updates.endAt = endAt;
    if (clientId) updates.clientId = clientId;
    if (carId) updates.carId = carId;
    if (price) updates.price = price;
    if (status) updates.status = status;
    if (clientFirstNameName) updates.clientFirstNameName = clientFirstNameName;
    if (clientLastName) updates.clientLastName = clientLastName;
    if (CIN) updates.CIN = CIN;
    if (adress) updates.adress = adress;

    // Find and update the location
    const location = await Location.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!location) {
      return res.status(404).json({ message: "Location not found." });
    }

    res.status(200).json(location);
  } catch (error) {
    console.error("Error updating location:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not update location." });
  }
};
// Update a location's details
const updateStatusLocation = async (req, res) => {
  try {
    const { status } = req.body;
    // Find and update the location
    const location = await Location.findByIdAndUpdate(req.params.id, { status }, {
        new: true,
      });
    if (!location) {
      return res.status(404).json({ message: "location non trouver" });
    }
    res.status(200).json(location);
  } catch (error) {
    console.error("Error updating location:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not update location." });
  }
};

// Delete a location
const deleteLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).json({ message: "Location not found." });
    }
    res.status(200).json({ message: "Location deleted successfully." });
  } catch (error) {
    console.error("Error deleting location:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not delete location." });
  }
};

module.exports = {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
  updateStatusLocation,
};
