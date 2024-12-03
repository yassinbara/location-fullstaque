const { Schema, model } = require("mongoose");

const locationSchema = new Schema(
  {
    startAt: {
      type: String,
      required: true,
    },
    endAt: {
      type: String,
      required: true,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    carId: {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: "String",
      enum: ["Nouveau", "Encoure", "terminee"],
      default: "Nouveau",
    },
    clientFirstNameName: {
      type: String,
      required: true,
    },
    clientLastName: {
      type: String,
      required: true,
    },
    CIN: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

locationSchema.virtual("car", {
  ref: "Car",
  localField: "carId",
  foreignField: "_id",
});
locationSchema.virtual("test").get(function () {
  return "test value";
});
locationSchema.set("toJSON", { virtuals: true });
locationSchema.set("toObject", { virtuals: true });
const Location = model("Location", locationSchema);
module.exports = Location;
