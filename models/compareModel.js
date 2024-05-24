import mongoose from "mongoose";

const compareSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
      }
},
  { timestamps: true }
);

const compareModel = mongoose.model('Compare', compareSchema);

export default compareModel;