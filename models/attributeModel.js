import mongoose from "mongoose";

const attributeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Name is required"],
        },
        image: {
            type: String,
        },
        type: {
            type: Number,
        },
        color: {
            type: Array,
        },
        value: {
            type: Array,
        },
        status: {
            type: Number,
        }
    },
    { timestamps: true }
);

const attributeModel = mongoose.model("attribute", attributeSchema);

export default attributeModel;