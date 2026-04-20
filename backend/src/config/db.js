const { mongoose } = require("mongoose");

const connectDb = async () => {
    while (true) {
        try {
            const conn = await mongoose.connect(process.env.DB_URI, {
                serverSelectionTimeoutMS: 5000,
                family: 4 
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
            break;
        } catch (error) {
            console.log("MongoDB Connection Error:", error.message);
            if (process.env.NODE_ENV === 'test') {
                throw error;
            }
            console.log("Retrying in 5 seconds...");
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
}

module.exports = connectDb;