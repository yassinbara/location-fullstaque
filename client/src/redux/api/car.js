import request from "../../utils/request";
import { carAction } from "../slices/carSlice";

export const getCars = () => async (dispatch) => {
  dispatch(carAction.setError(null));
  dispatch(carAction.setCars(null));
  try {
    const response = await request.get("/voitures");
    if (response.status === 200) {
      console.log(response);
      dispatch(carAction.setCars(response.data));
    }
  } catch (error) {
    console.log(error);
    if (error?.response) {
      dispatch(carAction.setError(error.response.data.message));
    } else {
      dispatch(carAction.setError(error.message));
    }
  }
};
export const getCarByid = (id) => async (dispatch) => {
  dispatch(carAction.setError(null));
  dispatch(carAction.setCar(null));
  try {
    const response = await request.get(`/voitures/${id}`);
    if (response.status === 200) {
      console.log(response);
      dispatch(carAction.setCar(response.data));
    }
  } catch (error) {
    console.log(error);
    if (error?.response) {
      dispatch(carAction.setError(error.response.data.message));
    } else {
      dispatch(carAction.setError(error.message));
    }
  }
};
export const createCar = (newCare,cb) => async (dispatch) => {
  dispatch(carAction.setError(null));

  try {
    const response = await request.post("/voitures", newCare);
    if (response.status === 201) {
      console.log(response);
      dispatch(carAction.addCar(response.data));
      cb && cb()
    }
  } catch (error) {
    // console.log(error);
    if (error?.response) {
      if (error.response.status === 400) {
        dispatch(carAction.setErrorValidation(error.response.data.details));
      } else {
        dispatch(carAction.setError(error.response.data.message));
      }
    } else {
      dispatch(carAction.setError(error.message));
    }
  }
};
export const updateCare = (id, updatedCare,cb) => async (dispatch) => {
  dispatch(carAction.setErrorValidation(null));

  try {
    const response = await request.put(`/voitures/${id}`, updatedCare);
    if (response.status === 200) {
      console.log(response);
      dispatch(carAction.updateCar(response.data));
      cb && cb()
    }
  } catch (error) {
    console.log(error);
    if (error?.response) {
      if (error.response.status === 400) {
        dispatch(carAction.setErrorValidation(error.response.data.details));
      } else {
        dispatch(carAction.setError(error.response.data.message));
      }
    } else {
      dispatch(carAction.setError(error.message));
    }
  }
};
export const updateCareStatus = (id, updatedCare) => async (dispatch) => {
  dispatch(carAction.setError(null));

  try {
    const response = await request.put("/voitures" + "/" + id, updatedCare);
    if (response.status === 200) {
      console.log(response);
      dispatch(carAction.updateCar(response.data));
    }
  } catch (error) {
    console.log(error);
    if (error?.response) {
      dispatch(carAction.setError(error.response.data.message));
    } else {
      dispatch(carAction.setError(error.message));
    }
  }
};
export const deleteCare = (id,cb) => async (dispatch) => {
  try {
    const response = await request.delete(`/voitures/${id}`);
    if (response.status === 200) {
      console.log(response);
      dispatch(carAction.deleteCar({ _id: id }));
      cb && cb()
    }
  } catch (error) {
    console.log(error);
    if (error?.response) {
      dispatch(carAction.setError(error.response.data.message));
    } else {
      dispatch(carAction.setError(error.message));
    }
  }
};
