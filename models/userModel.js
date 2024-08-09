import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate"; // Import autopopulate plugin

// Define the car image schema
const carImageSchema = new mongoose.Schema({
  carImage1: {
    type: String,
    default: '',
  },
  carImage2: {
    type: String,
    default: '',
  },
  carImage3: {
    type: String,
    default: '',
  },
  carImage4: {
    type: String,
    default: '',
  },
  carImage5: {
    type: String,
    default: '',
  },
  carImage6: {
    type: String,
    default: '',
  },
  carImage7: {
    type: String,
    default: '',
  },
  carImage8: {
    type: String,
    default: '',
  },
}, { _id: false }); // _id: false prevents Mongoose from creating an _id field for this schema


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
      default: "", // Default to an empty object
    },

    carImages: {
      type: carImageSchema,
      default: () => ({}), // Default to an empty object
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
    ratingId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rating",
        autopopulate: true, // Enable autopopulate for this field

      },
    ],

    status: {
      type: String,
      default: 0,
    },
    verified: {
      type: Number,
      default: 0,
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
    longitude: {
      type: String,
      default: "",
    },
    latitude: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

userSchema.plugin(autopopulate); // Apply autopopulate plugin to the schema

const userModel = mongoose.model("User", userSchema);

export default userModel;
