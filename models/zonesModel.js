import mongoose from "mongoose";

const zonesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Name is required"],
        },
        primary: {
            type: String
        },

        status: {
            type: String,
        }
    },
    { timestamps: true }
);

const zonesModel = mongoose.model("Zone", zonesSchema);

export default zonesModel;