import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  location: {
    type: String, // For the name of the location (e.g., "Central Park")
  },
  longitude: {
    type: Number, // For the longitude coordinate
  },
  latitude: {
    type: Number, // For the latitude coordinate
  },
});

const valetRideSchema = mongoose.Schema(
  {
    PickupStartLocation: {
      type: locationSchema,
    },
    PickupEndLocation: {
      type: locationSchema,
    },
    DropStartLocation: {
      type: locationSchema,
    },
    DropEndLocation: {
      type: locationSchema,
    },
    userId: {
      // Changed field name to plural and set type as an array of ObjectIds
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    VendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Valet_Model: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Valet",
    },
    ValetRide_Id: {
      type: Number,
      default: 0,
    },
    ValetConfirm: {
      type: Number,
      default: 0,
    },
    otpStatus: {
      type: Number,
      default: 0,
    },
    OTP: {
      type: Number,
    },
    noti: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    date: {
      type: String, // Adding endDate field of type Date
    },
    time: {
      type: String,
    },
    payment: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String,
    },
    type: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const valetRideModel = mongoose.model("Valetride", valetRideSchema);

export default valetRideModel;
