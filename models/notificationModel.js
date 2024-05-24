import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for the receiver
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

const notificationModel = mongoose.model('Notification', notificationSchema);

export default notificationModel;