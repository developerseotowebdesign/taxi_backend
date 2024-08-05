import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "title is required"],
        },

    },

);

const tagModel = mongoose.model("tag", tagSchema);

export default tagModel;