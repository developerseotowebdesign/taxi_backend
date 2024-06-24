import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "phone is required"],
    },
    email: {
      type: String,
      unique: true,
      sparse: true, // Allow null values to be considered unique
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },
    pincode: {
      type: String,
    },
    state: {
      type: String,
    },
    statename: {
      type: String,
    },
    Gender: {
      type: Number,
    },
    DOB: {
      type: Date,
    },
    address: {
      type: String,
    },
    SelectAddress: {
      type: String,
    },
    carNumber: {
      type: String,
      default: "",
    },
    carName: {
      type: String,
      default: "",
    },
    carImage: {
      type: String,
      default: "",
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    valets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Valet",
      },
    ],
    status: {
      type: String,
      default: 0,
    },
    verified: {
      type: Number,
      default: 1,
    },
    type: {
      type: Number,
      default: 0,
    },
    messages: {
      type: Number,
      default: 0,
    },
    notifications: {
      type: Number,
      default: 0,
    },
    wallet: {
      type: Number,
      default: 0,
    },
    LocalCommission: {
      type: Number,
      default: 13,
    },
    OutstationCommission: {
      type: Number,
      default: 13,
    },
    profile: {
      type: String,
      default: "",
    },
    DL: {
      type: String,
      default: "",
    },
    AadhaarFront: {
      type: String,
      default: "",
    },
    AadhaarBack: {
      type: String,
      default: "",
    },
    PoliceVerification: {
      type: String,
      default: "",
    },
    PassPort: {
      type: String,
      default: "",
    },
    Electricity: {
      type: String,
      default: "",
    },
    WaterBill: {
      type: String,
      default: "",
    },
    parentId: {
      // Changed field name to plural and set type as an array of ObjectIds
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
