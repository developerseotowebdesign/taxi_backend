import mongoose from "mongoose";

export const connection = async (username, password, DBURL) => {
    // const URL = `mongodb+srv://${username}:${password}@cluster0.41eowgo.mongodb.net/?retryWrites=true&w=majority`;

    const URL = `${DBURL}`;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connect sucess${mongoose.connection.host}`.bgMagenta)
    } catch (error) {
        console.log(`error connect ${error}`.bgRed.white)
    }
}

export default connection;