require("dotenv").config();
const connectDb = require("./src/config/db");
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/users", require("./src/routes/UserRoute"));
app.use("/api/categories", require("./src/routes/CategoryRoute"));
app.use('/upload', express.static('upload'));


const startServer = async () => {
    await connectDb();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
};

startServer();
module.exports = app;