import mongoose from "mongoose";

const homeLayoutSchema = new mongoose.Schema(
    {
        home_slider: {
            type: Array,
            default: {}
        },
        trending_product: {
            type: Array,
            default: {}
        },
        trending_product_banner: {
            type: Array,
            default: {}
        },
        trending_product_carousal: {
            type: Array,
            default: {}
        },
        best_selling_laptop: {
            type: Array,
            default: {}
        },
        collection_heading: {
            type: String,
            default: ""
        },
        collection_paragraph: {
            type: String,
            default: ""
        },
        collection_url: {
            type: String,
            default: ""
        },
        collection_img: {
            type: String,
            default: ""
        },
        latest_product: {
            type: Array,
            default: {}
        },
        latest_product_banner: {
            type: Array,
            default: {}
        },
        latest_product_carousal: {
            type: Array,
            default: {}
        },
        best_selling_smartphone: {
            type: Array,
            default: ""
        },
        recommended_products: {
            type: Array,
            default: ""
        }

    },
    { timestamps: true }
);

const homeLayoutModel = mongoose.model("homelayout", homeLayoutSchema);

// Check if data exists, if not, create a new document with default values
const checkOrCreateHomeDefaultData = async () => {
    try {
        const result = await homeLayoutModel.findOne({});
        if (!result) {
            // No document found, create a new one with default values
            const newData = new homeLayoutModel();
            await newData.save();
            console.log("Blank home Layout data created successfully.");
        }
    } catch (error) {
        console.error("Error checking or creating home data:", error);
    }
};

checkOrCreateHomeDefaultData();

export default homeLayoutModel;
