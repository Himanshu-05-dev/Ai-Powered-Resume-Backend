const mongoose = require("mongoose")



async function connectToDB() {

    console.log("MONGO_URI:", process.env.MONGO_URI);

    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB