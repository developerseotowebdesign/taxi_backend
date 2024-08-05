import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        p_id: {
            type: Number,
            require: [true, "product id is required"], unique: true
        },
        title: {
            type: String,
            require: [true, "Title is required"],
        },
        description: {
            type: String,
            require: [true, "Description is required"],
        },
        pImage: {
            type: String,
            require: [true, "Image is required"],
        },
        images: {
            type: Array,
        },
        slug: {
            type: String,
            // unique: true
        },
        features: {
            type: Array,
        },
        metaDescription: {
            type: String,
        },
        metaTitle: {
            type: String,
        },
        metaKeywords: {
            type: String,
        },
        regularPrice: {
            type: Number,
        },
        salePrice: {
            type: Number,
        },

        status: {
            type: String,
            default: 'true',
        },
        stock: {
            type: Number,
        },
        variations: {
            type: Object,
        },
        specifications: {
            type: Object,
            default: {
                specifications: [],
            },
        },

        Category: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }], // Define Category as an array of ObjectIds

        weight: {
            type: Number,
        },
        gst: {
            type: Number,
        },
        length: {
            type: String,
        },
        width: {
            type: String,
        },
        hsn: {
            type: String,
        },
        sku: {
            type: String,
        },

    },
    { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);

export default productModel;