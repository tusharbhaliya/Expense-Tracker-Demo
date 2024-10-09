const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect(process.env.MONGODB_URI)
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB