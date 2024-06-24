import mongoose from "mongoose";

const valetSchema = mongoose.Schema(
  {
    ValetTime: {
      type: String,
    },
    ValetDate: {
      type: String,
    },
    ValetLocation: {
      type: String,
    },
    ValetAddress: {
      type: String,
    },
    ValetCount: {
      type: Number,
    },
    mode: {
      type: String,
    },
    details: {
      type: Array,
    },
    discount: {
      type: String,
    },
    totalAmount: {
      required: [true, "Total Amount is required"],
      type: Number,
    },
    dailyCost: {
      type: Number,
      default: 0,
    },
    userId: {
      // Changed field name to plural and set type as an array of ObjectIds
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    VendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    CancelId: [
      {
        // Changed field name to plural and set type as an array of ObjectIds
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    driverId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    otherdriverId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    payment: {
      type: Number,
      default: 0,
    },
    Valet_Id: {
      type: Number,
    },
    reason: {
      type: String,
    },
    comment: {
      type: String,
    },
    paymentConfirm: {
      type: Number,
      default: 0,
    },
    startOTP: {
      type: Number,
      default: 0,
    },
    endOTP: {
      type: Number,
      default: 0,
    },
    startStatusOTP: {
      type: Number,
      default: 0,
    },
    endStatusOTP: {
      type: Number,
      default: 0,
    },
    otpStartDate: {
      type: Date,
    },
    otpEndDate: {
      type: Date,
    },
    paymentConfirm: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const valetModel = mongoose.model("Valet", valetSchema);

export default valetModel;
