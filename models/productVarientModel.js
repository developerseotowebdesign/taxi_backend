import mongoose from "mongoose";

const productVarientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Name is required"],
        },
        variations: {
            type: Object,
        },
        productId: [{  // Changed field name to plural and set type as an array of ObjectIds
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
            required: true,
        }],
        status: {
            type: String,
            default: 'true',
        }
    },
    { timestamps: true }
);

const productVarientModel = mongoose.model("ProductVarient", productVarientSchema);

export default productVarientModel;