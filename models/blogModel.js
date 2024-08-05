import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },

    description: {
      type: String,
    },

    image: {
      type: String,
    },
    slug: {
      type: String,
      unique: true
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
    metaKeywords: {
      type: String,
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

export default blogModel;