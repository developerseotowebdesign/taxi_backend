import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      },
      comment: {
        type: String,
        default: ''
      },
      status: {
        type: String,
        default: 1
      }

},
  { timestamps: true }
);

const ratingModel = mongoose.model('Rating', ratingSchema);

export default ratingModel;