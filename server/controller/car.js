const Car = require("../models/Car");
const {validateCreateCar , validateUpdateCar} = require("../validation/car");

// Get all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: "Server error. Could not retrieve cars." });
  }
};

// Get a car by ID
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).populate({
      path: "locations",
    });
    if (!car) {
      return res.status(404).json({ message: "Car not found." });
    }
    res.status(200).json(car);
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    res.status(500).json({ message: "Server error. Could not retrieve car." });
  }
};

// Create a new car
const createCar = async (req, res) => {
  try {
    const { name, matricule, matriculeDate, speed, price, isDisponible } =
      req.body;
    const { error, value } = validateCreateCar({
      name,
      matricule,
      matriculeDate,
      speed,
      price,
      isDisponible,
    });
    if (error) {
      return res.status(400).json(error);
    }

    const car = new Car({
      name,
      matricule,
      matriculeDate,
      speed,
      price,
      isDisponible,
    });

    await car.save();
    res.status(201).json(car);
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({
      message: "Server error. Could not create car. " + error.message,
    });
  }
};

// Update a car by ID
const updateCar = async (req, res) => {
  try {
    const { name, matricule, matriculeDate, speed, price, isDisponible } =
      req.body;
      const { error, value } = validateUpdateCar({
        name,
        matricule,
        matriculeDate,
        speed,
        price,
        isDisponible,
      });
      if (error) {
        return res.status(400).json(error);
      }
  
    // Find and update the car
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      { name, matricule, matriculeDate, speed, price, isDisponible },
      { new: true }
    );

    if (!car) {
      return res.status(404).json({ message: "Car not found." });
    }

    res.status(200).json(car);
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ message: "Server error. Could not update car." });
  }
};

// Delete a car by ID
const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found." });
    }
    res.status(200).json({ message: "Car deleted successfully." });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ message: "Server error. Could not delete car." });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
