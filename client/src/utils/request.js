import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3101",
});
export default request;
