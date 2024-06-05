import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for the sender
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    amount: { 
        type: Number, 
        required: true 
    },
    type: { 
        type: Number, 
        required: true 
    },
},
    { timestamps: true }
)

const transactionModel = mongoose.model('Transaction', transactionSchema);

export default transactionModel;