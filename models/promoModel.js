import mongoose from "mongoose";

const promoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            require: [true, "Name is required"],
        },

        rate: {
            type: String,
            require: [true, "Name is required"],
        },
        type: {
            type: Number,
            default: 1
        },
        status: {
            type: String,
        }
    },
    { timestamps: true }
);

const promoModel = mongoose.model("Promo", promoSchema);

export default promoModel;