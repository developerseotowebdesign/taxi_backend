import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    items: {
        type: Object,
        default: {}, // Default value is an empty object
    },
    isEmpty: {
        type: Boolean,
        default: true,
    },
    totalItems: {
        type: Number,
        default: 0,
    },
    totalUniqueItems: {
        type: Number,
        default: 0,
    },
    cartTotal: {
        type: Number,
        default: 0,
    },
});

const cartModel = mongoose.model('Cart', cartSchema);

export default cartModel;