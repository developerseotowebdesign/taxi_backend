import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for the sender
        required: true,
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for the receiver
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order', // Reference to the User model for the receiver
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
    { timestamps: true }
)

const messageModel = mongoose.model('Message', messageSchema);

export default messageModel;