import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    status: {
      type: String,
    },
    pickupTime: {
      type: String,
    },
    pickupDate: {
      type: String,
    },
    bookingTyp: {
      type: String,
    },
    rideTyp: {
      type: String,
    },
    PickupLocation: {
      type: String,
    },
    PickupAddress: {
      type: String,
    },
    DestinationLocation: {
      type: String,
    },
    DestinationAddress: {
      type: String,
    },
    BookingDistance: {
      type: String,
    },
    TripStart: {
      type: String,
    },
    TripEnd: {
      type: String,
    },
    CarType: {
      type: String,
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
    shipping: {
      type: String,
    },
    CarType: {
      type: String,
    },
    totalAmount: {
      required: [true, "Total Amount is required"],
      type: Number,
    },
    totalFinalAmount: {
      type: Number,
    },
    userId: {
      // Changed field name to plural and set type as an array of ObjectIds
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    driverId: {
      // Changed field name to plural and set type as an array of ObjectIds
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ratingId: {
      // Changed field name to plural and set type as an array of ObjectIds
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
    },

    CancelId: [
      {
        // Changed field name to plural and set type as an array of ObjectIds
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    primary: {
      type: String,
    },
    payment: {
      type: Number,
      default: 0,
    },
    orderId: {
      type: Number,
    },
    reason: {
      type: String,
    },
    comment: {
      type: String,
    },
    driverReject: {
      type: Array,
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
    DriveHR: {
      type: Number,
      default: 0,
    },
    FinalDriveHR: {
      type: Number,
      default: 0,
    },
    FinalDriveKM: {
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
  },
  { timestamps: true }
);

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
