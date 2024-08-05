import mongoose from "mongoose";

const pageSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "title is required"],
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
    },
    { timestamps: true }
);

const pageModel = mongoose.model("Page", pageSchema);

export default pageModel;