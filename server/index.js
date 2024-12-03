const express = require("express");
const app = express();
const cors = require("cors");
const carRouter = require("./router/cars");
const userRoute = require("./router/user");
const locationRoutes = require("./router/location");
require("./connect");

app.use(express.json());
app.use(cors());
app.use("/voitures", carRouter);
app.use("/locations", locationRoutes);
app.use("/users", userRoute);
app.listen(3101, () => console.log("server raning in 3101"));
