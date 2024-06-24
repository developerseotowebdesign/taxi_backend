import mongoose from "mongoose";

const valetRideSchema = mongoose.Schema(
  {
    PickupStartLocation: {
      type: String,
    },
    PickupEndLocation: {
      type: String,
    },
    DropStartLocation: {
      type: String,
    },
    DropEndLocation: {
      type: String,
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
  },
  { timestamps: true }
);

const valetRideModel = mongoose.model("Valetride", valetRideSchema);

export default valetRideModel;
