import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({

    title: {
        type: String,
    },
    filePath: {
        type: String,
    },
    fileType: {
        type: String,
    },
    fileSize: {
        type: String,
    },
    dimensions: {
        type: String,
    },
    folderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder", // Reference to the "Folder" model
    },
    createdAt: {
        type: Date,
        default: Date.now, // Set the default value to the current date and time
    },
});


const galleryModel = mongoose.model('Gallery', gallerySchema);

export default galleryModel;