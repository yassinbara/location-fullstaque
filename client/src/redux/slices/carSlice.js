import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    cars: [],
    car: null,
    error: null,
    errorValidation: null,
  },
  reducers: {
    setCars(state, action) {
      state.cars = action.payload;
    },
    setCar(state, action) {
      state.car = action.payload;
    },
    addCar(state, action) {
      state.cars = [action.payload, ...state.cars];
    },
    updateCar(state, action) {
      state.cars = state.cars.map((e) =>
        e._id === action.payload._id ? action.payload : e
      );
    },
    deleteCar(state, action) {
      state.cars = state.cars.filter((c) => c._id !== action.payload._id);
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setErrorValidation(state, action) {
      state.errorValidation= action.payload;
    },
  },
});

export const carAction = carSlice.actions
export const carReducer = carSlice.reducer
