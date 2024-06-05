import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
  }, token: {
    type: String,
    required: [true, "token is required"],
  },
  pincode: {
    type: String,
  },
  state: {
    type: String,
  },statename: {
    type: String,
  },
  address: {
    type: String,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
  status: {
    type: String,
    default: 1
  } , verified:{
    type: Number,
    default: 0
  },type:{
    type: Number,
    default: 0
  },
  messages:{
    type: Number,
    default: 0
  },
  notifications:{
    type: Number,
    default: 0
  },
  wallet:{
    type: Number,
    default: 0
  },
  LocalCommission:{
    type: Number,
    default: 13
  },
  OutstationCommission:{
    type: Number,
    default: 13
  }
},
  { timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

export default userModel;