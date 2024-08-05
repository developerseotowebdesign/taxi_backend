import mongoose from "mongoose";

const whishlistSchema = mongoose.Schema({
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

const wishlistModel = mongoose.model('Wishlist', whishlistSchema);

export default wishlistModel;