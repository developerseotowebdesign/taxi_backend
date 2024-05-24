import mongoose from "mongoose";

const taxSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Name is required"],
        },
    
        rate: {
            type: String,
            require: [true, "Name is required"],
        },
        type: {
            type: Number,
            default:1
        },
        zoneId:[{  // Changed field name to plural and set type as an array of ObjectIds
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Zone',
            required: true,
        }],
        status: {
            type: String,
        }
    },
    { timestamps: true }
);

const taxModel = mongoose.model("Tax", taxSchema);

export default taxModel;