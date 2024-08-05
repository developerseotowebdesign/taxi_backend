import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate"; // Import autopopulate plugin

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
    },
    VendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Valetride_Model: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Valetride",
      autopopulate: true, // Enable autopopulate for this field
    }
    ],
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
      default: 0,
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
    type: {
      type: Number,
      default: 0,
    },
    ValetName: {
      type: String,
    },
    ValetImage: {
      type: Array,
    },
    startDate: {
      type: Date, // Adding startDate field of type Date
    },
    endDate: {
      type: Date, // Adding endDate field of type Date
    },
    longitude: {
      type: String,
    },
    latitude: {
      type: String,
    },
    status: {
      type: String,
    },

  },
  { timestamps: true }
);

valetSchema.plugin(autopopulate); // Apply autopopulate plugin to the schema


const valetModel = mongoose.model("Valet", valetSchema);

export default valetModel;
