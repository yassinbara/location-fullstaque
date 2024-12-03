

const { connect } = require("mongoose");
const connecttodb = async () => {
  try {
    connect("mongodb://127.0.0.1:27017/shshshs");
    console.log("coonect good wid mndb");
  } catch (err) {
    console.log(err);
  }
};
connecttodb()