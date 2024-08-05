import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email is Required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'email is Required']
    }, token: {
        type: String,
    }
})

const adminModel = mongoose.model('Admin', adminSchema);


// Check if data exists, if not, create a new document with default values
const checkOrCreateDefaultData = async () => {
    try {
        const result = await adminModel.findOne({});
        if (!result) {
            const hashedPassword = await bcrypt.hash("admin@987", 10);
            const admin = new adminModel({ email: "admin@gmail.com", password: hashedPassword, token: hashedPassword });
            await admin.save();
            console.log("Admin created successfully.");
        }
    } catch (error) {
        console.error("Error checking or creating admin:", error);
    }
};

checkOrCreateDefaultData();


export default adminModel;