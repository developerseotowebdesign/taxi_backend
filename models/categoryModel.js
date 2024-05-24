import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "title is required"],
        },
        image: {
            type: String,
        },
        slug: {
            type: String,
            unique: true
        },
        description: {
            type: String,
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
        status: {
            type: String,
            default: "true"
        },
        parent: {
            type: mongoose.Types.ObjectId,
            ref: "category", // Reference to the same "Category" model
        },
    },
    { timestamps: true }
);

const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;