import mongoose from "mongoose";

const folderSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true, // Make name field required
    },
     folderId: {
        type: mongoose.Types.ObjectId,
        ref: "Folder", // Reference to the same "Category" model
    }
},
{ timestamps: true }
);



const folderModel = mongoose.model('Folder', folderSchema);

export default folderModel;