const { Schema, model } = require("mongoose");

const carSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    matricule: {
      type: String,
      required: true,
      unique: true,
    },
    matriculeDate: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isDisponible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
carSchema.virtual("locations", {
  ref: "Location",
  localField: "_id",
  foreignField: "carId",
});
carSchema.set("toJSON",{virtuals:true});
carSchema.set("toObject",{virtuals:true});

const Car = model("Car", carSchema);
module.exports = Car;
